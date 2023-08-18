import { Outlet } from 'react-router-dom';
import { NavbarMenu, Footer } from '../components/';

const LayoutMain = () => {
  return (
    <div className='min-h-screen bg-white flex flex-col'>
      <NavbarMenu />
      <div className='flex-1'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default LayoutMain;
