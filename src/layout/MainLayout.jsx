import { NavbarMenu } from '../components/';

const MainLayout = ({ children }) => {
  return (
    <div className='min-h-screen bg-secondary flex flex-col'>
      <NavbarMenu />
      <div className='flex-1'>{children}</div>
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
