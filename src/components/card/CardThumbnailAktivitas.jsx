import { Link } from 'react-router-dom';

const CardThumbnailAktivitas = ({ activity }) => {
  return (
    <Link
      className='w-full sm:w-56 md:w-[400px]'
      to={`/aktivitas?filter=${activity?.value}`}
    >
      <div className='px-4 py-4 flex flex-col items-center gap-4 bg-white border-[3px] border-primary rounded-xl shadow-md'>
        <h1 className='text-center text-lg text-primary font-bold'>
          {activity?.name}
        </h1>
        <img className='w-28 h-28' src={activity?.img} alt='' />
      </div>
    </Link>
  );
};

export default CardThumbnailAktivitas;
