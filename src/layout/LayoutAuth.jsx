import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Logo } from '../assets';

const LayoutLogin = () => {
  const [errorMsg, setErrorMsg] = useState('');
  const errorMsgHandler = (errMsg) => setErrorMsg(errMsg);

  return (
    <div className='min-h-screen sm:p-6 flex sm:justify-center sm:items-center'>
      <div className='w-full max-w-screen-sm p-10 pt-8 bg-white sm:rounded-xl sm:shadow-md'>
        <div className='flex flex-col items-center'>
          <img src={Logo} loading='lazy' alt='Logo ITC' width={128} />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet context={[errorMsg, errorMsgHandler]} />
        </Suspense>
      </div>
    </div>
  );
};

export default LayoutLogin;
