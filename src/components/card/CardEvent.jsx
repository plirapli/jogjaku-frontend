import { Link } from 'react-router-dom';
import defaultCover from '../../assets/default-destination.jpg';
import { Icon } from '@iconify/react';

const CardEvent = ({ work }) => {
  const imgCover = work?.img_cover || defaultCover;

  return (
    <Link>
      <div className='h-32 flex border rounded-md shadow overflow-hidden cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1'>
        <div className='w-full flex flex-col px-4 py-3'>
          <div className='w-full text-lg capitalize font-semibold clamp'>
            Candi Borobudur
          </div>
          <div className='mt-0.5 -ml-0.5 flex items-center gap-1.5 text-sm text-black text-opacity-40'>
            <Icon icon='iconamoon:profile' width='20' />
            <div>Rajawali Indonesia</div>
            <div>∙</div>
            <div>17 Agustus 2023</div>
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
