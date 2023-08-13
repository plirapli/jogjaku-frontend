import { Link } from 'react-router-dom';
import ConstraintLarge from '../../layout/ConstraintLarge';
import CardDestinasi from '../../components/card/CardDestinasi';

const Destinasi = () => {
  return (
    <ConstraintLarge>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='w-full text-2xl font-bold text-left text-primary'>
            Destinasi
          </h1>
          <div className='text-sm text-black text-opacity-50'>
            Lorem ipsum dolor sit amet
          </div>
        </div>
        <Link to='/destinasi'>
          <div className='underline w-max text-black text-opacity-40'>
            Lihat semua
          </div>
        </Link>
      </div>
      <div className='w-full mt-3'>
        <div className='w-full mt-3 space-y-4 sm:space-y-0 sm:grid grid-cols-2 xl:grid-cols-4 gap-4'>
          <CardDestinasi />
          <CardDestinasi />
          <CardDestinasi />
          <CardDestinasi />
        </div>
      </div>
    </ConstraintLarge>
  );
};

export default Destinasi;
