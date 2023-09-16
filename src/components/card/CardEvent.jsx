import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import defaultCover from '../../assets/default-destination.jpg';

const CardEvent = ({ event }) => {
  const imageUrl = event?.imageUrl || defaultCover;
  const imgCover = imageUrl.split(',')[0];

  return (
    <Link to={`/event/${event?.id}`}>
      <div className='bg-primary flex border rounded-2xl shadow-sm overflow-hidden cursor-pointer transition-all hover:shadow-md relative'>
        <img
          src={imgCover}
          alt=''
          className='absolute w-full sm:w-52 h-full object-cover'
        />
        <div className='z-10 w-full flex pl-4  pr-4 py-3 bg-gradient-to-t from-30% sm:bg-gradient-to-l sm:from-85% from-[#725201]'>
          <div className='sm:min-w-[15%]'></div>
          <div className='flex flex-col'>
            <div className='w-full text-base sm:text-lg capitalize font-semibold clamp text-white'>
              {event?.name}
            </div>
            <div className='mt-0.5 -ml-0.5 text-xs flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-1.5 sn:text-sm text-white/50 text-opacity-40'>
              <div className='flex items-center gap-1'>
                <Icon
                  className='hidden sm:inline'
                  icon='iconamoon:profile'
                  width='18'
                />
                <div>{event?.organizer}</div>
              </div>
              <div className='hidden sm:block'>∙</div>
              <div className='flex items-center gap-1'>
                <div>{event?.date}</div>
              </div>
            </div>
            <div className='flex-1 mt-2 text-sm text-white line-clamp-2 sm:clamp-3'>
              {event?.description}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardEvent;
