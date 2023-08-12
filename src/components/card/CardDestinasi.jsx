import { Link } from 'react-router-dom';
import defaultCover from '../../assets/default_cover.jpg';

const CardWork = ({ work }) => {
  const imgCover = work?.img_cover || defaultCover;

  return (
    <div className='flex flex-col gap-2.5 border bg-white rounded-md shadow overflow-hidden'>
      <div className='bg-gray-400 border-b h-36 w-full'>
        <img src={imgCover} alt='' className='object-cover h-full w-full' />
      </div>
      <div className='flex-1 flex flex-col p-4 pt-0'>
        <div className='text-sm text-primary capitalize font-medium clamp'>
          Lorem Ipsum
        </div>
        <div className='flex-1 mt-0.5 text-sm clamp'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
          dolores, ad blanditiis ducimus at distinctio deserunt magni itaque
          possimus provident? Excepturi iusto consectetur inventore, aperiam
          saepe amet nam possimus commodi.
        </div>
        <Link
          to={`/work/`}
          className='link mt-2.5 text-sm text-black text-opacity-50'
        >
          See details
        </Link>
      </div>
    </div>
  );
};

export default CardWork;
