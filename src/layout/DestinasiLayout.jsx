import { NavLink, Outlet, useParams } from 'react-router-dom';
import ConstraintLarge from './ConstraintLarge';
import { Suspense, useEffect, useState } from 'react';
import { getDestinationByID } from '../utils/destination';

const DestinasiLayout = () => {
  const { destinationID } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [destination, setDestination] = useState({});
  const imageUrl = destination?.imageUrl;
  const imgCover = imageUrl?.split(',')[0];

  useEffect(() => {
    getDestinationByID(destinationID)
      .then(({ destination }) => setDestination(() => ({ ...destination })))
      .catch(({ data }) => {
        console.log(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div>
      <div className='flex flex-col justify-end relative w-full h-[480px]'>
        <img
          src={imgCover}
          alt=''
          className='absolute w-full object-cover h-full bg-gray-200'
        />
        <h1 className='w-full text-center p-4 z-10 text-white text-4xl font-bold bg-black bg-opacity-25'>
          {destination?.name}
        </h1>
      </div>

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
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet context={destination} />
        </Suspense>
      </ConstraintLarge>
    </div>
  );
};

export default DestinasiLayout;
