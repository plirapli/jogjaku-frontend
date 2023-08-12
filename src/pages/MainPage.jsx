import Hero from '../components/Hero';
import Destinasi from './main/Destinasi';

const MainPage = () => {
  return (
    <div className='mt-[5.5rem]'>
      <Hero />
      <div className='mt-5'>
        <Destinasi />
      </div>
      <div className='mt-5'>
        <Destinasi />
      </div>
    </div>
  );
};

export default MainPage;
