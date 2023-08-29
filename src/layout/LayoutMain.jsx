import { Outlet } from 'react-router-dom';
import { NavbarMenu, Footer } from '../components/';
import { Suspense } from 'react';
import Loading from '../components/loading/Loading';

const LayoutMain = () => {
  return (
    <div className='min-h-screen bg-white flex flex-col'>
      <NavbarMenu />
      <div className='flex-1'>
        <Suspense
          fallback={
            <div className='flex items-center justify-center'>
              <Loading />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default LayoutMain;
