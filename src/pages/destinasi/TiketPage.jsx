import { useOutletContext } from 'react-router-dom';
import { CardBeliTiket } from '../../components/card';
import { useState } from 'react';

const TiketPage = () => {
  const destination = useOutletContext();
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  return (
    <div>
      <div className='flex flex-col gap-2 sm:flex-row sm:gap-4 items-center'>
        <div className='w-full'>
          <h2 className='text-lg font-medium'>Beli Tiket</h2>
          <p className='text-black text-opacity-50'>Candi Borobudur</p>
        </div>
        <div className='w-full flex items-center gap-4'>
          <label
            htmlFor='first_name'
            className='min-w-fit text-sm font-medium text-gray-900 dark:text-white'
          >
            Pilih Tanggal
          </label>
          <input
            type='date'
            onChange={(e) => setDate(e.target.value)}
            value={date}
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
            placeholder='Select date'
          />
        </div>
      </div>
      <div className='divider'></div>
      <div className='space-y-3'>
        {destination?.destinationTickets?.map((ticket) => (
          <CardBeliTiket
            name={destination?.name}
            date={date}
            ticket={ticket}
            key={ticket.id}
          />
        ))}
      </div>
    </div>
  );
};

export default TiketPage;
