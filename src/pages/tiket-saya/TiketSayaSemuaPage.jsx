import { useEffect, useState } from 'react';
import { getOrderHistory } from '../../utils/order';
import { CardTransaksi } from '../../components/card/';
import Loading from '../../components/loading/Loading';

const TiketSayaSemuaPage = () => {
  const [allPayment, setAllPayment] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getOrderHistory()
      .then(setAllPayment)
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className='mt-2 space-y-3'>
      {!isLoading ? (
        allPayment?.length > 0 ? (
          allPayment?.map((payment) => (
            <CardTransaksi key={payment?.id} payment={payment} />
          ))
        ) : (
          <div className='text-gray-dark'>
            Kamu belum pernah melakukan transaksi.
          </div>
        )
      ) : (
        <div className='mt-2 w-full flex justify-center'>
          <Loading />
        </div>
      )}
    </div>
  );
};

export default TiketSayaSemuaPage;
