import { Icon } from '@iconify/react';
import React from 'react';

const CardEventKalender = () => {
  return (
    <div className='min-w-full lg:min-w-[32.1%] rounded-lg overflow-hidden border border-gray-300'>
      <div className='text-center px-4 py-2 bg-[#725201] text-lg font-bold text-white'>
        Januari
      </div>
      <div className='flex flex-col gap-2.5 p-3'>
        <CardEventDetail />
        <CardEventDetail />
        <CardEventDetail />
        <CardEventDetail />
      </div>
    </div>
  );
};

const CardEventDetail = () => {
  return (
    <div className='px-3 py-2.5 flex items-center gap-2 bg-[#725201]/10 rounded'>
      <Icon icon='majesticons:calendar-line' color='#725201' width='40' />
      <div>
        <div className='text-[#725201] font-bold'>We The Fest</div>
        <div className='text-xs text-gray-dark'>18-20 Agustus</div>
      </div>
    </div>
  );
};

export default CardEventKalender;
