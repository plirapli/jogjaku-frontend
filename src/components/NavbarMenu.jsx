import { Icon } from '@iconify/react';
import { Link, NavLink } from 'react-router-dom';
import { Ava } from '../assets';

const NavbarMenu = () => {
  const listItems = [
    { title: 'Beranda', href: '/' },
    { title: 'Destinasi', href: '/destinasi' },
    { title: 'Event', href: '/event' },
  ];

  return (
    <nav className='bg-yellow-50 fixed w-full z-20 top-0 left-0 border-b border-gray-200'>
      <div className='max-w-screen-xl flex items-center justify-between mx-auto px-4 py-3 gap-8'>
        {/* Logo */}
        <Link to='/' className='flex items-center'>
          <img
            src='/src/assets/logo-primary.svg'
            className='h-8 mr-3'
            alt='Flowbite Logo'
          />
        </Link>

        {/* Profil */}
        <div className='min-w-fit flex items-center md:order-2'>
          <button
            type='button'
            className='flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600'
            id='user-menu-button'
            aria-expanded='false'
            data-dropdown-toggle='user-dropdown'
            data-dropdown-placement='bottom'
          >
            <span className='sr-only'>Open user menu</span>
            <img className='w-8 h-8 rounded-full' src={Ava} alt='user photo' />
          </button>
          <div
            className='z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600'
            id='user-dropdown'
          >
            <div className='px-4 py-3'>
              <span className='block text-sm text-gray-900 dark:text-white'>
                Muhammad Rafli
              </span>
              <span className='block text-sm  text-gray-500 truncate dark:text-gray-400'>
                rafli@itcupnyk.com
              </span>
            </div>
            <ul className='py-2' aria-labelledby='user-menu-button'>
              <li>
                <Link
                  to='/profil'
                  className='flex items-center gap-1.5 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                >
                  <Icon icon='iconamoon:profile' width='16' />
                  Profil
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
                <Link className='flex items-center gap-1.5 px-4 py-2 text-sm text-red-500 hover:bg-gray-100'>
                  <Icon icon='mingcute:exit-line' width='16' />
                  Keluar
                </Link>
              </li>
            </ul>
          </div>
          <button
            data-collapse-toggle='navbar-sticky'
            type='button'
            className='inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
            aria-controls='navbar-sticky'
            aria-expanded='false'
          >
            <span className='sr-only'>Open main menu</span>
            <svg
              className='w-5 h-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 17 14'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 1h15M1 7h15M1 13h15'
              />
            </svg>
          </button>
        </div>

        {/* Menu tengah */}
        <div
          className='items-center hidden w-full md:block md:order-1'
          id='navbar-sticky'
        >
          <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent'>
            {listItems.map((listItem) => (
              <ListItem key={listItem.title} href={listItem.href}>
                {listItem.title}
              </ListItem>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

<NavLink
  to='/destinasi/1'
  end
  className={({ isActive, isPending }) =>
    isPending ? '' : isActive ? 'tab tab-active' : 'tab tab-inactive'
  }
>
  Deskripsi
</NavLink>;

const ListItem = ({ href, children, ...props }) => (
  <li>
    <NavLink
      to={href}
      className={({ isActive, isPending }) =>
        isPending ? '' : isActive ? 'nav nav-active' : 'nav nav-inactive'
      }
      {...props}
    >
      {children}
    </NavLink>
  </li>
);

export default NavbarMenu;
