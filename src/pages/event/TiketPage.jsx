import { useOutletContext } from 'react-router-dom';
import { CardBeliTiket } from '../../components/card';
import { useState } from 'react';

const TiketPage = () => {
  const event = useOutletContext();

  return (
    <div>
      <div className='w-full'>
        <h2 className='text-lg font-medium'>Beli Tiket</h2>
        <p className='text-black text-opacity-50'>Candi Borobudur</p>
      </div>
      <div className='divider'></div>
      <div className='space-y-3'>
        {event?.eventTickets?.map((ticket) => (
          <CardBeliTiket name={event?.name} ticket={ticket} key={ticket.id} />
        ))}
      </div>
    </div>
  );
};

export default TiketPage;
