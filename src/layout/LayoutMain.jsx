import { Outlet } from 'react-router-dom';
import { Footer } from '../components/';
import { Suspense } from 'react';
import Loading from '../components/loading/Loading';
import { BottomNavbarMenu, TopNavbarMenu } from '../components/NavbarMenu';

const LayoutMain = () => {
  return (
    <div className='min-h-screen bg-white flex flex-col'>
      <TopNavbarMenu />
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
      <BottomNavbarMenu />
    </div>
  );
};

export default LayoutMain;
