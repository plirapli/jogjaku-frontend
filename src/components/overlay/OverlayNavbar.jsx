import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { useProfile } from '../../hooks/title';
import { logoutHandler } from '../../utils/auth';

const OverlayNavbar = () => {
  const { profile, setProfile } = useProfile();
  const navigate = useNavigate();
  // const toProfile = () => navigate(`/u/${profile?.username}/profile`);
  // const toDaftarMateri = () => navigate('manage/course/');
  // const toDaftarPengguna = () => navigate('/manage/user/');
  const toLogout = () => {
    logoutHandler();
    setProfile({});
    navigate('/');
  };

  return (
    <>
      <div
        className='min-w-max z-50 absolute right-0 sm:right-2 transform translate-y-full -bottom-7 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600'
        id='user-dropdown'
      >
        <div className='px-4 py-3'>
          <span className='block text-sm text-gray-900 dark:text-white'>
            {profile?.fullName}
          </span>
          <span className='block text-sm  text-gray-500 truncate dark:text-gray-400'>
            {profile?.username}
          </span>
        </div>
        <ul className='py-2' aria-labelledby='user-menu-button'>
          <li>
            <Link
              to='profil'
              className='flex items-center gap-1.5 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
            >
              <Icon icon='iconamoon:profile' width='16' />
              Profil Saya
            </Link>
          </li>
          <li>
            <Link
              to='keranjang'
              className='flex items-center gap-1.5 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
            >
              <Icon icon='mdi:cart-outline' width='16' />
              Keranjang
            </Link>
          </li>
          <li>
            <Link
              to='tiket-saya'
              className='flex items-center gap-1.5 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
            >
              <Icon icon='mdi:ticket-outline' width='16' />
              Tiket Saya
            </Link>
          </li>
          <div className='h-[1px] w-full px-2 bg-gray-200'></div>
          <li>
            <div
              onClick={toLogout}
              className='flex items-center gap-1.5 px-4 py-2 cursor-pointer text-sm text-red-500 hover:bg-gray-100'
            >
              <Icon icon='mingcute:exit-line' width='16' />
              Keluar
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default OverlayNavbar;
