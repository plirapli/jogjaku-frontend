import { useEffect, useState } from 'react';
import { CardTransaksi } from '../../components/card';
import { getOrderPending } from '../../utils/order';

const TiketSayaPendingPage = () => {
  const [allPendingPayment, setAllPendingPayment] = useState([]);

  useEffect(() => {
    getOrderPending()
      .then(setAllPendingPayment)
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className='mt-2 space-y-3'>
      {allPendingPayment.map((payment) => (
        <CardTransaksi key={payment?.id} payment={payment} />
      ))}
    </div>
  );
};

export default TiketSayaPendingPage;
