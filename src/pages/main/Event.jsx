import { Link } from 'react-router-dom';
import ConstraintLarge from '../../layout/ConstraintLarge';
import { CardEvent } from '../../components/card';
import { useEffect, useState } from 'react';
import { getAllEvents } from '../../utils/event';
import Loading from '../../components/loading/Loading';

const Event = () => {
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
    <ConstraintLarge>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='w-full text-2xl font-bold text-left text-primary'>
            Event-event
          </h1>
          <div className='text-sm text-black text-opacity-50'>
            Temukan Beragam Acara Seru di Event Wisata Kami
          </div>
        </div>
        <Link to='/event'>
          <div className='underline w-max text-black text-opacity-40'>
            Lihat semua
          </div>
        </Link>
      </div>
      <div className='w-full mt-3'>
        {isLoading ? (
          <div className='mt-24 flex justify-center items-center'>
            <Loading />
          </div>
        ) : (
          <div className='w-full mt-3 flex flex-col gap-4'>
            {events.map((event) => (
              <CardEvent key={events?.id} event={event} />
            ))}
          </div>
        )}
        {/* : (
           <div className='mt-4 text-center'>Data tidak ditemukan.</div>
         )} */}
      </div>
    </ConstraintLarge>
  );
};

export default Event;
