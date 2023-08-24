import { Icon } from '@iconify/react';
import React from 'react';

const CardTiketAktif = () => {
  return (
    <div className='flex items-center px-4 py-3 border rounded-md'>
      <div className='flex-1 flex flex-col items-start'>
        <div className='flex gap-2.5 items-center'>
          <div className='font-medium text-primary'>
            {/* {ticket?.destinationTicket?.destination?.name} */}
            Candi Prambanan
          </div>
          <div className='text-xs px-3 rounded-full border-2 border-gray-300 capitalize'>
            {/* {ticket?.destinationTicket?.touristType} */}
            Domestic
          </div>
          <div className='font-bold'>x{/* {ticket?.quantity} */}6</div>
        </div>
        <div className='mt-1 font-bold'>
          953f5e60-3773-4b4c-b506-a3bc25392242
        </div>
        <div className='mt-2.5 flex flex-col items-start sm:flex-row sm:items-center gap-2 text-gray-500'>
          <div className='flex items-center gap-0.5'>
            <Icon icon='carbon:person' width='16' />
            <span className='capitalize text-xs'>
              {/* {ticket?.destinationTicket?.ageType} */} Adult
              <span className='hidden sm:inline'>,</span>
            </span>
          </div>
          <div className='mt-1 sm:mt-0 flex items-center gap-2'>
            <div className='flex items-center gap-0.5'>
              <Icon icon='material-symbols:date-range' width='16' />
              <span className='text-xs'>
                {/* {date} */}
                12 Agustus 2023
                <span className='hidden sm:inline'>,</span>
              </span>
            </div>
            <div className='flex items-center gap-0.5'>
              <Icon icon='mdi:clock-outline' width='16' />
              <span className='text-xs'>
                {/* {ticket?.destinationTicket?.dateTime} */}09.00-17.00
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='text-sm sm:text-base font-medium text-yellow-400'>
        Rp
        {/* {ticket?.totalPrice / ticket?.quantity} */}115000
      </div>
    </div>
  );
};

export default CardTiketAktif;
