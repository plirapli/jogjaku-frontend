import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const CardEventKalender = ({ monthEvent }) => {
  const month = Object.keys(monthEvent)[0];

  return (
    <div className='min-w-full lg:min-w-[32.1%] rounded-lg overflow-hidden border border-gray-300'>
      <div className='text-center px-4 py-2 bg-primaryDark text-lg font-bold text-white'>
        {month}
      </div>
      <div className='flex flex-col gap-2.5 p-3'>
        {monthEvent[month].map((event) => (
          <CardEventDetail key={event?.id} event={event} />
        ))}
      </div>
    </div>
  );
};

const CardEventDetail = ({ event }) => {
  return (
    <Link to={`/event/${event?.id}`}>
      <div className='px-3 py-2.5 flex items-center gap-2 bg-primaryDark/10 rounded transition-all hover:bg-primaryDark/25'>
        <Icon icon='majesticons:calendar-line' color='#725201' width='36' />
        <div>
          <div className='text-sm text-primaryDark font-bold'>
            {event?.name}
          </div>
          <div className='text-xs text-gray-dark'>{event?.date}</div>
        </div>
      </div>
    </Link>
  );
};

export default CardEventKalender;
