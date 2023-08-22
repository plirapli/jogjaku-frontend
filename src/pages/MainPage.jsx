import Destinasi from './main/Destinasi';
import Event from './main/Event';

const MainPage = () => {
  window.history.pushState({ urlPath: '/login' }, null, '/');

  return (
    <div className='mt-[5.5rem] flex flex-col gap-2.5'>
      <Destinasi />
      <Event />
    </div>
  );
};

export default MainPage;
