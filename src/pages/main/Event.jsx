import { Link } from 'react-router-dom';
import ConstraintLarge from '../../layout/ConstraintLarge';
import { CardEvent } from '../../components/card';
import { useEffect, useState } from 'react';
import { getAllEventsLimit } from '../../utils/event';
import Loading from '../../components/loading/Loading';
import EventCalendar from './EventCalendar';

const Event = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getAllEventsLimit()
      .then(setEvents)
      .catch(({ data }) => {
        console.log(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <ConstraintLarge>
      <div className='mb-3 flex items-center justify-between gap-2'>
        <h1 className='w-full text-xl font-bold text-center text-primaryDark'>
          Event
        </h1>
      </div>
      <EventCalendar />
      {/* <div className='w-full mt-5'>
        {isLoading ? (
          <div className='mt-24 flex justify-center items-center'>
            <Loading />
          </div>
        ) : (
          <div className='w-full mt-3 flex flex-col gap-4'>
            {events.map((event) => (
              <CardEvent key={event?.id} event={event} />
            ))}
            <Link to='/event'>
              <div
                className={`px-4 py-2 bg-black/10 text-black/50
              rounded text-center border 
              transition-all hover:bg-black/20 hover:shadow`}
              >
                Lihat Semua
              </div>
            </Link>
          </div>
        )}
      </div> */}
    </ConstraintLarge>
  );
};

export default Event;
