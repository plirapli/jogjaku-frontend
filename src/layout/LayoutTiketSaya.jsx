import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { ConstraintLarge } from '.';
import Loading from '../components/loading/Loading';

const LayoutTiketSaya = () => {
  return (
    <div className='mt-16'>
      <div className='mb-2.5 text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700'>
        <div className='w-full px-5 flex flex-col items-center'>
          <div className='w-full max-w-screen-xl'>
            <ul className='flex flex-wrap -mb-px'>
              <li className='mr-2'>
                <NavLink
                  to=''
                  end
                  className={({ isActive, isPending }) =>
                    isPending
                      ? ''
                      : isActive
                      ? 'tab tab-active'
                      : 'tab tab-inactive'
                  }
                >
                  Semua
                </NavLink>
              </li>
              <li className='mr-2'>
                <NavLink
                  to='aktif'
                  end
                  className={({ isActive, isPending }) =>
                    isPending
                      ? ''
                      : isActive
                      ? 'tab tab-active'
                      : 'tab tab-inactive'
                  }
                >
                  Aktif
                </NavLink>
              </li>
              <li className='mr-2'>
                <NavLink
                  to='pending'
                  end
                  className={({ isActive, isPending }) =>
                    isPending
                      ? ''
                      : isActive
                      ? 'tab tab-active'
                      : 'tab tab-inactive'
                  }
                >
                  Pending
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ConstraintLarge>
        <Suspense
          fallback={
            <div className='flex items-center justify-center'>
              <Loading />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </ConstraintLarge>
    </div>
  );
};

export default LayoutTiketSaya;
