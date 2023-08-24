import { useEffect } from 'react';
import { getOrderHistory } from '../../utils/order';
import { CardTransaksi } from '../../components/card/';

const TiketSayaSemuaPage = () => {
  useEffect(() => {
    getOrderHistory()
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className='space-y-3'>
      <CardTransaksi />
      <CardTransaksi />
      <CardTransaksi />
    </div>
  );
};

export default TiketSayaSemuaPage;
