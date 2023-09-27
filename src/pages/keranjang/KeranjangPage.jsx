import { ConstraintLarge } from '../../layout';
import CardTiketKeranjang from '../../components/card/CardTiketKeranjang';
import TableItemCart from '../../components/table/TableItemCart';
import { useEffect, useState } from 'react';
import { deleteCartByID, getUserCart } from '../../utils/cart';
import { addOrder } from '../../utils/order';
import Loading from '../../components/loading/Loading';
import Button from '../../components/buttons/Button';
import { Link } from 'react-router-dom';
import CardEventTiketKeranjang from '../../components/card/CardEventTiketKeranjang';
import TableEventItemCart from '../../components/table/TableEventItemCart';

const KeranjangPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [destinationTicket, setDestinationTicket] = useState([]);
  const [eventTicket, setEventTicket] = useState([]);
  const [totalPayment, setTotalPayment] = useState(0);

  const totalPaymentHandle = () => {
    if (destinationTicket.length || eventTicket.length) {
      setTotalPayment(() => {
        const destination = destinationTicket.reduce(
          (acc, cur) => acc + cur.totalPrice,
          0
        );
        const event = eventTicket.reduce((acc, cur) => acc + cur.totalPrice, 0);
        return destination + event;
      });
    } else {
      setTotalPayment(() => 0);
    }
  };

  useEffect(() => {
    totalPaymentHandle();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [destinationTicket.length, eventTicket.length]);

  const onClickOrderHandle = () => {
    addOrder()
      .then(({ data }) => {
        window.snap.pay(data?.token);
      })
      .catch((err) => console.error(err));
  };

  const onClickDeleteHandle = (cartID) => {
    deleteCartByID(cartID)
      .then(() => {
        setDestinationTicket((tickets) =>
          tickets.filter((ticket) => ticket.id != cartID)
        );
      })
      .catch((err) => console.error(err));
  };

  const onClickDeleteEventHandle = (cartID) => {
    deleteCartByID(cartID)
      .then(() =>
        setEventTicket((tickets) =>
          tickets.filter((ticket) => ticket.id != cartID)
        )
      )
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getUserCart()
      .then((data) => {
        setDestinationTicket([...data.userDestinationTicketCart]);
        setEventTicket([...data.userEventTicketCart]);
      })
      .catch(({ data }) => {
        console.log(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className='pt-20'>
      <ConstraintLarge>
        <h1 className='w-full text-lg font-bold text-primary'>
          Keranjang Saya
        </h1>
        <p className='text-black text-opacity-40 text-sm'>
          Menampilkan semua item yang telah masuk ke keranjang
        </p>
        <div className='divider'></div>
        <div className='flex flex-col lg:flex-row lg:items-start gap-3'>
          <div className='w-full'>
            {/* Destinasi */}
            <div className='w-full space-y-3'>
              <div className='text-sm font-bold -mb-1.5'>
                Keranjang Destinasi
              </div>
              {isLoading ? (
                <div className='mt-4 flex justify-center'>
                  <Loading />
                </div>
              ) : !destinationTicket?.length ? (
                <div className='py-4 flex flex-col gap-4'>
                  <div className='mb-4 text-center text-gray-dark'>
                    Keranjang destinasi masih kosong.
                  </div>
                  <Link to='/destinasi'>
                    <Button>Jelajahi Destinasi Wisata</Button>
                  </Link>
                </div>
              ) : (
                destinationTicket?.map((ticket) => (
                  <CardTiketKeranjang
                    key={ticket?.id}
                    ticket={ticket}
                    onClickDeleteHandle={onClickDeleteHandle}
                  />
                ))
              )}
            </div>

            <div className='divider'></div>

            {/* Event */}
            <div className='w-full space-y-3'>
              <div className='text-sm font-bold -mb-1.5'>Keranjang Event</div>
              {isLoading ? (
                <div className='mt-4 flex justify-center'>
                  <Loading />
                </div>
              ) : !eventTicket?.length ? (
                <div className='py-4 flex flex-col gap-4'>
                  <div className='mb-4 text-center text-gray-dark'>
                    Keranjang event masih kosong.
                  </div>
                  <Link to='/event'>
                    <Button>Jelajahi Event</Button>
                  </Link>
                </div>
              ) : (
                eventTicket?.map((ticket) => (
                  <CardEventTiketKeranjang
                    key={ticket?.id}
                    ticket={ticket}
                    onClickDeleteHandle={onClickDeleteEventHandle}
                  />
                ))
              )}
            </div>
          </div>

          {/* Rincian harga */}
          <div className='w-full border px-4 py-3 rounded-md'>
            <h2 className='leading-tight mb-2 text-gray-dark'>Rincian Harga</h2>
            <div className='divider my-1'></div>

            {/* Tabel rincian harga */}
            <div className='relative overflow-x-auto'>
              {destinationTicket?.length > 0 &&
                destinationTicket?.map((ticket) => (
                  <TableItemCart
                    key={ticket?.destinationTicketId}
                    ticket={ticket}
                  />
                ))}
              {eventTicket?.length > 0 &&
                eventTicket?.map((ticket) => (
                  <TableEventItemCart
                    key={ticket?.eventTicketId}
                    ticket={ticket}
                  />
                ))}

              {eventTicket?.length <= 0 && destinationTicket?.length <= 0 && (
                <div className='pt-1 pb-2 px-4 text-center text-gray-dark'>
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
                disabled={
                  destinationTicket?.length <= 0 && eventTicket?.length <= 0
                }
                className={`
                  w-full px-5 py-2.5 mt-4
                  focus:outline-none focus:ring-4 
                  text-center font-medium rounded-md text-sm 
                  ${
                    destinationTicket?.length > 0 || eventTicket?.length > 0
                      ? 'text-white bg-primary hover:bg-yellow-500 focus:ring-yellow-300'
                      : 'text-black text-opacity-30 bg-gray-100'
                  }`}
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
