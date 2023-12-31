import { useOutletContext } from 'react-router-dom';
import { CardEventBeliTiket } from '../../components/card';
import FreeTicketState from '../../assets/free-ticket-state.png';

const TiketPage = () => {
  const event = useOutletContext();

  return (
    <div>
      {event?.eventTickets?.length ? (
        <>
          <div className='flex flex-col gap-2 sm:flex-row sm:gap-4 items-center'>
            <div className='w-full'>
              <h2 className='text-sm font-bold'>Beli Tiket</h2>
              <p className='text-black text-opacity-50'>{event?.name}</p>
            </div>
            <div className='text-sm w-full font-medium sm:text-right'>
              <div className='font-normal mb-1 text-gray-dark'>
                Tanggal Event
              </div>
              {event?.date}
            </div>
          </div>
          <div className='divider'></div>
        </>
      ) : (
        <div className='mt-4 flex flex-col gap-2 items-center'>
          <div className='font-bold text-center text-2xl text-primaryDark drop-shadow-md'>
            Gratis Tiket Masuk
          </div>
          <img className='w-96' src={FreeTicketState} alt='' />
        </div>
      )}
      <div className='space-y-3'>
        {event?.eventTickets?.map((ticket) => (
          <CardEventBeliTiket
            name={event?.name}
            ticket={ticket}
            key={ticket.id}
          />
        ))}
      </div>
    </div>
  );
};

export default TiketPage;
