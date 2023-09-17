import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';

const CardSemua = () => {
  return (
    <Link to={`/destinasi`}>
      <div className='flex flex-col bg-black/20 font-medium items-center justify-center border rounded-2xl shadow h-80 transition-all hover:shadow-lg gap-2'>
        <Icon width='84' icon='ic:round-border-all' />
        Lihat Semua Destinasi
      </div>
    </Link>
  );
};

export default CardSemua;
