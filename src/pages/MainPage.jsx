import { Logo } from '../assets';
import ConstraintLarge from '../layout/ConstraintLarge';
import Aktivitas from './main/Aktivitas';
import Destinasi from './main/Destinasi';
import Event from './main/Event';

const MainPage = () => {
  window.history.pushState({ urlPath: '/login' }, null, '/');

  return (
    <div className='mt-[5.5rem] flex flex-col gap-2'>
      <div className='w-full px-5 flex flex-col items-center'>
        <div className='w-full max-w-screen-xl'>
          <div className='flex flex-col gap-4'>
            <img src={Logo} className='h-12' alt='Logo' />
            <h1 className='text-2xl font-bold text-center leading-10 font-serif'>
              Jelajahi Kota Yogyakarta
              <br />
              Bersama Kami
            </h1>
          </div>
          <div className='w-full divider'></div>
        </div>
      </div>
      <Destinasi />
      <div className='w-full px-5 flex flex-col items-center'>
        <div className='w-full max-w-screen-xl'>
          <div className='w-full divider'></div>
        </div>
      </div>
      <Event />
      <div className='w-full px-5 flex flex-col items-center'>
        <div className='w-full max-w-screen-xl'>
          <div className='w-full divider'></div>
        </div>
      </div>
      <Aktivitas />
    </div>
  );
};

export default MainPage;
