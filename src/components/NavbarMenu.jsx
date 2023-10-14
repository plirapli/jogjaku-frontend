import { Link, NavLink } from 'react-router-dom';
import { Ava } from '../assets';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import OverlayNavbar from './overlay/OverlayNavbar';
import { Logo } from '../assets';
import { useProfile } from '../hooks/title';
import { Icon } from '@iconify/react';

const NavbarMenu = () => {
  const { profile } = useProfile();
  const listItems = [
    { title: 'Beranda', href: '/' },
    { title: 'Destinasi', href: '/destinasi' },
    { title: 'Event', href: '/event' },
    { title: 'Aktivitas', href: '/aktivitas' },
  ];

  return (
    <nav className='bg-yellow-50 fixed w-full z-20 top-0 left-0 border-b border-gray-200'>
      <div className='max-w-screen-xl flex items-center justify-between mx-auto px-4 py-3 gap-4'>
        {/* Logo */}
        <Link to='/' className='flex items-center mr-4'>
          <img src={Logo} className='h-8 mr-3' alt='Logo' />
        </Link>

        {/* Menu tengah */}
        <div className='items-center hidden w-full md:block' id='navbar-sticky'>
          <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent'>
            {listItems.map((listItem) => (
              <ListItem key={listItem.title} href={listItem.href}>
                {listItem.title}
              </ListItem>
            ))}
          </ul>
        </div>

        <Link
          to='keranjang'
          className='flex items-center gap-1.5 
                     text-sm text-primary
                     transition-all hover:text-primaryHover'
        >
          <Icon icon='mdi:cart-outline' width='24' />
        </Link>

        {/* Profil */}
        <Menu as='div' className='min-w-fit relative flex items-center'>
          <div className='flex items-center'>
            <Menu.Button className='focus:outline-none '>
              {/* User info */}
              <span className='sr-only'>Open user menu</span>
              <img
                className='w-8 h-8 object-cover rounded-full transition-all ring-1 ring-black/40'
                src={profile?.profilePict || Ava}
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
