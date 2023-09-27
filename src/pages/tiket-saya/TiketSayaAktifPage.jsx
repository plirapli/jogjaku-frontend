import { useEffect, useState } from 'react';
import { CardEventTiketAktif, CardTiketAktif } from '../../components/card';
import { getActiveTicket } from '../../utils/order';
import Loading from '../../components/loading/Loading';

const TiketSayaPage = () => {
  const [tickets, setTickets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getActiveTicket()
      .then((data) => setTickets([...data]))
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className='mt-2 layout-tiket-aktif'>
      {!isLoading ? (
        tickets?.length > 0 ? (
          tickets?.map((ticket) =>
            ticket?.destinationTicketId ? (
              <CardTiketAktif key={ticket?.id} ticket={ticket} />
            ) : (
              <CardEventTiketAktif key={ticket?.id} ticket={ticket} />
            )
          )
        ) : (
          <div className='text-gray-dark'>
            Kamu tidak memiliki tiket yang aktif.
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

export default TiketSayaPage;
