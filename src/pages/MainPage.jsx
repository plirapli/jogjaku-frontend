import Hero from '../components/Hero';
import Destinasi from './main/Destinasi';
import Event from './main/Event';

const MainPage = () => {
  return (
    <div className='mt-[5.5rem]'>
      <Hero />
      <div className='mt-2.5'>
        <Destinasi />
      </div>
      <div className='mt-2.5'>
        <Event />
      </div>
    </div>
  );
};

export default MainPage;
