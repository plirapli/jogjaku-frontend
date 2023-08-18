import { Link } from 'react-router-dom';
import defaultCover from '../../assets/default-destination.jpg';
import { Icon } from '@iconify/react';

const CardEvent = ({ work }) => {
  const imgCover = work?.img_cover || defaultCover;

  return (
    <Link>
      <div className='h-32 flex border rounded-md shadow-sm overflow-hidden cursor-pointer transition-all hover:shadow-md'>
        <div className='w-full flex flex-col px-4 py-3'>
          <div className='w-full text-lg capitalize font-semibold clamp'>
            Candi Borobudur
          </div>
          <div className='mt-0.5 -ml-0.5 flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-1.5 text-sm text-black text-opacity-40'>
            <div className='flex items-center gap-1'>
              <Icon icon='iconamoon:profile' width='18' />
              <div>Rajawali Indonesia</div>
            </div>
            <div className='hidden sm:block'>∙</div>
            <div className='flex items-center gap-1'>
              <Icon
                className='block sm:hidden'
                icon='material-symbols:date-range'
                width='18'
              />
              <div>17 Agustus 2023</div>
            </div>
          </div>
          <div className='flex-1 mt-2 text-sm text-gray-500 clamp'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            laudantium voluptatem repudiandae, accusantium dignissimos optio
            repellendus nobis iste cum inventore minima esse consectetur atque
            mollitia quod officia ullam earum corporis?
          </div>
        </div>
        <img src={imgCover} alt='' className='object-cover' />
      </div>
    </Link>
  );
};

export default CardEvent;
