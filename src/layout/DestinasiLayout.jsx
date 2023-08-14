import { Link, NavLink, Outlet } from 'react-router-dom';
import ConstraintLarge from './ConstraintLarge';

const DestinasiLayout = () => {
  return (
    <div>
      <img src='' alt='' className='h-96 bg-gray-200' />

      <div className='mb-2.5 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700'>
        <div className='w-full px-5 flex flex-col items-center'>
          <div className='w-full max-w-screen-xl'>
            <ul className='flex flex-wrap -mb-px'>
              <li className='mr-2'>
                <NavLink
                  to='/destinasi/1'
                  end
                  className={({ isActive, isPending }) =>
                    isPending
                      ? ''
                      : isActive
                      ? 'tab tab-active'
                      : 'tab tab-inactive'
                  }
                >
                  Deskripsi
                </NavLink>
              </li>
              <li className='mr-2'>
                <NavLink
                  to='/destinasi/1/tiket'
                  end
                  className={({ isActive, isPending }) =>
                    isPending
                      ? ''
                      : isActive
                      ? 'tab tab-active'
                      : 'tab tab-inactive'
                  }
                >
                  Beli Tiket
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ConstraintLarge>
        <Outlet />
      </ConstraintLarge>
    </div>
  );
};

export default DestinasiLayout;
