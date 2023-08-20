import { Icon } from '@iconify/react';
import { Link, NavLink } from 'react-router-dom';
import { Ava } from '../assets';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import OverlayNavbar from './overlay/OverlayNavbar';

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
        <Menu
          as='div'
          className='min-w-fit relative flex items-center md:order-2'
        >
          <div>
            <Menu.Button className='focus:outline-none '>
              {/* User info */}
              <span className='sr-only'>Open user menu</span>
              <img
                className='w-8 h-8 rounded-full transition-all hover:border-2 hover:border-black hover:border-opacity-40'
                src={Ava}
                alt='user photo'
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items className='absolute right-0 origin-top-right'>
              <OverlayNavbar />
            </Menu.Items>
          </Transition>
        </Menu>

        {/* <div className='min-w-fit flex items-center md:order-2'>
          <OverlayNavbar />

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
        </div> */}

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
