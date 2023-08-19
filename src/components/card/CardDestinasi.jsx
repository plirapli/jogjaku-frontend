import { Link } from 'react-router-dom';
import defaultCover from '../../assets/default-destination.jpg';

const CardDestinasi = ({ data }) => {
  const imageUrl = data?.imageUrl || defaultCover;
  const imgCover = imageUrl.split(',')[0];

  return (
    <Link to={`/destinasi/${data?.id}`}>
      <div className='flex flex-col justify-end border rounded-md shadow overflow-hidden relative h-80 cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1'>
        <img
          src={imgCover}
          alt=''
          className='absolute object-cover h-full w-full'
        />
        <div className='flex flex-col p-4 backdrop-blur-sm bg-black/40 text-white'>
          <div className='text-xl text-primary capitalize font-medium clamp'>
            {data?.name}
          </div>
          <div className='flex-1 text-white text-opacity-75'>{data?.name}</div>
        </div>
      </div>
    </Link>
  );
};

export default CardDestinasi;
