import { ConstraintLarge } from '../../layout';
import CardTiketKeranjang from '../../components/card/CardTiketKeranjang';
import TableItemCart from '../../components/table/TableItemCart';
import { useEffect, useState } from 'react';
import { deleteCartByID, getUserCart } from '../../utils/cart';
import { addOrder } from '../../utils/order';

const KeranjangPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [destinationTicket, setDestinationTicket] = useState([]);
  const [totalPayment, setTotalPayment] = useState(0);

  const totalPaymentHandle = () => {
    if (destinationTicket.length) {
      setTotalPayment(() =>
        destinationTicket.reduce((acc, cur) => acc + cur.totalPrice, 0)
      );
    } else {
      setTotalPayment(() => 0);
    }
  };

  useEffect(() => {
    totalPaymentHandle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [destinationTicket.length]);

  const onClickOrderHandle = () => {
    addOrder()
      .then(({ data }) => {
        window.snap.pay(data?.token);
      })
      .catch((err) => console.error(err));
  };

  const onClickDeleteHandle = (cartID) => {
    // console.log(cartID);
    deleteCartByID(cartID)
      .then(() => {
        setDestinationTicket((tickets) =>
          tickets.filter((ticket) => ticket.id != cartID)
        );
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getUserCart()
      .then((data) => setDestinationTicket([...data.userDestinationTicketCart]))
      .catch(({ data }) => {
        console.log(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className='pt-20'>
      <ConstraintLarge>
        <h1 className='w-full text-xl font-bold text-primary'>
          Keranjang Saya
        </h1>
        <p className='text-black text-opacity-40'>
          Menampilkan semua item yang telah masuk ke keranjang
        </p>
        <div className='divider'></div>
        <div className='flex flex-col lg:flex-row lg:items-start gap-3'>
          <div className='w-full space-y-3'>
            {destinationTicket?.map((ticket) => (
              <CardTiketKeranjang
                key={ticket?.id}
                ticket={ticket}
                onClickDeleteHandle={onClickDeleteHandle}
              />
            ))}
          </div>

          {/* Rincian harga */}
          <div className='w-full border px-4 py-3 rounded-md'>
            <h2 className='text-lg leading-tight font-medium mb-2'>
              Rincian Harga
            </h2>
            <div className='divider my-1'></div>

            {/* Tabel rincian harga */}
            <div className='relative overflow-x-auto'>
              {destinationTicket.length ? (
                destinationTicket?.map((ticket) => (
                  <TableItemCart
                    key={ticket?.destinationTicketId}
                    ticket={ticket}
                  />
                ))
              ) : (
                <div className='pt-1 pb-2 px-4 text-center'>
                  Kamu belum memasukkan item ke keranjang.
                </div>
              )}
              <div className='divider my-1'></div>

              {/* Total pembayaran */}
              <table className='w-full text-sm text-left text-gray-500'>
                <tfoot>
                  <tr className='font-semibold text-gray-900 dark:text-white'>
                    <th
                      scope='row'
                      colSpan={3}
                      className='w-full pr-6 py-1 text-base'
                    >
                      Total Pembayaran
                    </th>
                    <td className='px-2 py-1'>Rp</td>
                    <td className='px-6 py-1 text-right'>{totalPayment}</td>
                  </tr>
                </tfoot>
              </table>
              <button
                onClick={onClickOrderHandle}
                type='button'
                className='w-full text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-md text-sm px-5 py-2.5 text-center mt-4'
              >
                Lanjutkan Pembayaran
              </button>
            </div>
          </div>
        </div>
      </ConstraintLarge>
    </div>
  );
};

export default KeranjangPage;
