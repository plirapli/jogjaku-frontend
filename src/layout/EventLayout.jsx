import { NavLink, Outlet, useParams } from 'react-router-dom';
import ConstraintLarge from './ConstraintLarge';
import { Suspense, useEffect, useState } from 'react';
import { getEventByID } from '../utils/event';
import { OverlayLoading } from '../components/overlay';

const EventLayout = () => {
  const { eventID } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [event, setEvent] = useState({});
  const imageUrl = event?.imageUrl;
  const imgCover = imageUrl?.split(',')[0];

  useEffect(() => {
    getEventByID(eventID)
      .then(setEvent)
      .catch(({ data }) => {
        console.log(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <div className='flex flex-col justify-end relative w-full h-[480px]'>
        <img
          src={imgCover}
          alt=''
          className='absolute w-full object-cover h-full bg-gray-200'
        />
        <h1 className='w-full text-center p-4 z-10 text-white text-4xl font-bold bg-black bg-opacity-25'>
          {event?.name || 'Title'}
        </h1>
      </div>

      <div className='mb-2.5 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700'>
        <div className='w-full px-5 flex flex-col items-center'>
          <div className='w-full max-w-screen-xl'>
            <ul className='flex flex-wrap -mb-px'>
              <li className='mr-2'>
                <NavLink
                  to=''
                  end
                  className={({ isActive, isPending }) =>
                    isPending
                      ? ''
                      : isActive
                      ? 'tab tab-active'
                      : 'tab tab-inactive'
                  }
                >
                  Informasi Event
                </NavLink>
              </li>
              {/* <li className='mr-2'>
                <NavLink
                  to='tiket'
                  end
                  className={({ isActive, isPending }) =>
                    isPending
                      ? ''
                      : isActive
                      ? 'tab tab-active'
                      : 'tab tab-inactive'
                  }
                >
                  Beli Tiket
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
      <ConstraintLarge>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet context={event} />
        </Suspense>
      </ConstraintLarge>
      <OverlayLoading loadingState={isLoading} />
    </div>
  );
};

export default EventLayout;
