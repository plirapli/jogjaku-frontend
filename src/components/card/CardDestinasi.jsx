import { Link } from 'react-router-dom';
import defaultCover from '../../assets/default-destination.jpg';

const CardDestinasi = ({ work }) => {
  const imgCover = work?.img_cover || defaultCover;

  return (
    <Link>
      <div className='flex flex-col justify-end border rounded-md shadow overflow-hidden relative h-80 cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1'>
        <img
          src={imgCover}
          alt=''
          className='-z-10 absolute object-cover h-full w-full'
        />
        <div className='flex flex-col p-4 backdrop-blur-sm bg-black/40 text-white'>
          <div className='text-xl text-primary capitalize font-medium clamp'>
            Candi Borobudur
          </div>
          <div className='flex-1 text-white text-opacity-75'>
            Borobudur Temple
          </div>
          {/* <Link
          to={`/work/`}
          className='link mt-2.5 text-sm text-black text-opacity-50'
        >
          See details
        </Link> */}
        </div>
      </div>
    </Link>
  );
};

export default CardDestinasi;
