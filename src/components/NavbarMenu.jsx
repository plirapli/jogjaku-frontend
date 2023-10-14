import { Link, NavLink } from 'react-router-dom';
import { Ava } from '../assets';
import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import OverlayNavbar from './overlay/OverlayNavbar';
import { Logo } from '../assets';
import { useProfile } from '../hooks/title';
import { Icon } from '@iconify/react';

const listItems = [
  { title: 'Beranda', href: '/', icon: 'material-symbols:home-outline' },
  { title: 'Destinasi', href: '/destinasi', icon: 'jam:plane' },
  { title: 'Event', href: '/event', icon: 'material-symbols:event-outline' },
  {
    title: 'Aktivitas',
    href: '/aktivitas',
    icon: 'material-symbols:camping-outline',
  },
];

const TopNavbarMenu = () => {
  const { profile } = useProfile();

  return (
    <nav className='bg-yellow-50 fixed w-full z-20 top-0 left-0 border-b border-gray-200'>
      <div className='max-w-screen-xl flex items-center justify-between mx-auto px-4 py-3 gap-4'>
        {/* Logo */}
        <Link to='/' className='flex items-center mr-4'>
          <img src={Logo} className='h-8 mr-3' alt='Logo' />
        </Link>

        {/* Menu */}
        <div className='items-center hidden w-full md:block' id='navbar-sticky'>
          <ul className='flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent'>
            {listItems.map((listItem) => (
              <TopListItem key={listItem.title} href={listItem.href}>
                {listItem.title}
              </TopListItem>
            ))}
          </ul>
        </div>

        <div className='flex items-center gap-4'>
          {/* Keranjang */}
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
      </div>
    </nav>
  );
};

const BottomNavbarMenu = () => {
  return (
    <nav className='shadow-md z-20 bottom-0 fixed bg-secondary w-full flex md:hidden'>
      {listItems.map((listItem) => (
        <BottomListItem key={listItem.title} item={listItem}>
          {listItem.title}
        </BottomListItem>
      ))}
    </nav>
  );
};

const TopListItem = ({ href, children, ...props }) => (
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

const BottomListItem = ({ item, children, ...props }) => {
  const navClass = `w-full flex flex-col gap-1 items-center px-3 py-2
                    cursor-pointer transition-all`;
  const navActive = `text-primary/100`;
  const navInactive = `text-black/40 hover:text-black/60 hover:bg-primary/10`;

  return (
    <NavLink
      to={item.href}
      className={({ isActive, isPending }) =>
        isPending
          ? ''
          : isActive
          ? `${navClass} ${navActive}`
          : `${navClass} ${navInactive}`
      }
      {...props}
    >
      <Icon icon={item.icon} width='24' />
      <div className='text-sm font-medium'>{children}</div>
    </NavLink>
  );
};

export { TopNavbarMenu, BottomNavbarMenu };
