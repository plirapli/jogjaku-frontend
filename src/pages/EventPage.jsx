import { useEffect, useState } from 'react';
import { CardEvent } from '../components/card/';
import ConstraintLarge from '../layout/ConstraintLarge';
import Loading from '../components/loading/Loading';
import { getAllEvents } from '../utils/event';

const EventPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getAllEvents()
      .then(setEvents)
      .catch(({ data }) => {
        console.log(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className='pt-24'>
      <ConstraintLarge>
        <div className='text-center'>
          <h1 className='w-full text-2xl font-bold text-primary'>
            Event-event
          </h1>
          <p className='text-black text-opacity-40'>
            Temukan Beragam Acara Seru di Event Wisata Kami
          </p>
        </div>
        <div className='divider my-3'></div>
        {isLoading ? (
          <div className='mt-24 flex justify-center items-center'>
            <Loading />
          </div>
        ) : (
          <div className='mt-4 flex flex-col gap-4'>
            {events.map((event) => (
              <CardEvent key={event?.id} event={event} />
            ))}
          </div>
        )}
      </ConstraintLarge>
    </div>
  );
};

export default EventPage;
