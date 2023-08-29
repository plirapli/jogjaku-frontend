import { useEffect, useState } from 'react';
import { CardTransaksi } from '../../components/card';
import { getOrderPending } from '../../utils/order';
import Loading from '../../components/loading/Loading';

const TiketSayaPendingPage = () => {
  const [allPayment, setAllPayment] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getOrderPending()
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
            Kamu tidak memiliki pembayaran pending.
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

export default TiketSayaPendingPage;
