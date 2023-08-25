import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import defaultCover from '../../assets/default-destination.jpg';

const CardEvent = ({ event }) => {
  const imageUrl = event?.imageUrl || defaultCover;
  const imgCover = imageUrl.split(',')[0];

  return (
    <Link to={`/event/${1}`}>
      <div className='h-32 flex border rounded-md shadow-sm overflow-hidden cursor-pointer transition-all hover:shadow-md'>
        <div className='w-full flex flex-col px-4 py-3'>
          <div className='w-full text-lg capitalize font-semibold clamp'>
            {event?.name}
          </div>
          <div className='mt-0.5 -ml-0.5 flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-1.5 text-sm text-black text-opacity-40'>
            <div className='flex items-center gap-1'>
              <Icon icon='iconamoon:profile' width='18' />
              <div>{event?.organizer}</div>
            </div>
            <div className='hidden sm:block'>∙</div>
            <div className='flex items-center gap-1'>
              <Icon
                className='block sm:hidden'
                icon='material-symbols:date-range'
                width='18'
              />
              <div>{event?.date}</div>
            </div>
          </div>
          <div className='flex-1 mt-2 text-sm text-gray-500 clamp'>
            {event?.description}
          </div>
        </div>
        <img src={imgCover} alt='' className='w-36 object-cover' />
      </div>
    </Link>
  );
};

export default CardEvent;
