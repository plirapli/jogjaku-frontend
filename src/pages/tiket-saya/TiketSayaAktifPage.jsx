import { useEffect, useState } from 'react';
import { CardTiketAktif } from '../../components/card';
import { getActiveTicket } from '../../utils/order';

const TiketSayaPage = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    getActiveTicket()
      .then((data) => {
        setTickets([...data]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className='mt-2 space-y-3'>
      {tickets?.map((ticket) => (
        <CardTiketAktif key={ticket?.id} ticket={ticket} />
      ))}
    </div>
  );
};

export default TiketSayaPage;
