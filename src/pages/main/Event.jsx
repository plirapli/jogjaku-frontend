import { Link } from 'react-router-dom';
import ConstraintLarge from '../../layout/ConstraintLarge';
import { CardEvent } from '../../components/card';

const Event = () => {
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
        <div className='w-full mt-3 flex flex-col gap-4'>
          <CardEvent />
          <CardEvent />
          <CardEvent />
          <CardEvent />
        </div>
      </div>
    </ConstraintLarge>
  );
};

export default Event;
