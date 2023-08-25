import { useEffect, useState } from 'react';
import { getOrderHistory } from '../../utils/order';
import { CardTransaksi } from '../../components/card/';

const TiketSayaSemuaPage = () => {
  const [allPayment, setAllPayment] = useState([]);

  useEffect(() => {
    getOrderHistory()
      .then(setAllPayment)
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className='mt-2 space-y-3'>
      {allPayment.map((payment) => (
        <CardTransaksi key={payment?.id} payment={payment} />
      ))}
    </div>
  );
};

export default TiketSayaSemuaPage;
