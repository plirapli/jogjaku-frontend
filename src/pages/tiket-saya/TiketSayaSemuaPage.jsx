import { useEffect } from 'react';
import { getOrderHistory } from '../../utils/order';

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

  return <div>Semua</div>;
};

export default TiketSayaSemuaPage;
