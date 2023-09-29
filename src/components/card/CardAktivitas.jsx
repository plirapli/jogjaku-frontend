import { Link } from 'react-router-dom';
import defaultCover from '../../assets/default-destination.jpg';

const CardAktivitas = ({ data }) => {
  const imageUrl = data?.imageUrl || defaultCover;
  const imgCover = imageUrl.split(',')[0];

  return (
    <Link to={`/aktivitas/${data?.id}`}>
      <div className='flex flex-col justify-end border rounded-2xl shadow overflow-hidden relative h-80 cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1'>
        <img
          src={imgCover}
          alt=''
          className='absolute object-cover h-full w-full'
        />
        <div className='z-10 flex flex-col p-4 bg-gradient-to-t from-[#725201]'>
          <div className='text-lg text-white capitalize font-bold clamp'>
            {data?.name}
          </div>
          <div className='flex-1 text-opacity-75 text-sm text-[#FFF6DD]'>
            {data?.regency}
          </div>
          <div className='w-fit rounded-full mt-2.5 px-2 py-0.5 border-2 border-[#FFF6DD] text-xs flex-1 text-[#FFF6DD]'>
            {data?.tag}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardAktivitas;
