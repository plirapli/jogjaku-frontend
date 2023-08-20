import { Carousel } from 'flowbite-react';
import ConstraintLarge from '../layout/ConstraintLarge';

const Hero = () => {
  return (
    <ConstraintLarge>
      <Carousel>
        <img
          className='h-40 w-full'
          alt='...'
          src='https://flowbite.com/docs/images/carousel/carousel-1.svg'
        />
        <img
          className='h-40'
          alt='...'
          src='https://flowbite.com/docs/images/carousel/carousel-2.svg'
        />
      </Carousel>
    </ConstraintLarge>
  );
};

export default Hero;
