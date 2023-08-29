import { Icon } from '@iconify/react';
import {
  formatDateLongMonth,
  formatDateWithDay,
} from '../../utils/dateConverter';

const CardTransaksiItem = ({ order }) => {
  const date = formatDateLongMonth(order?.createdAt);

  return (
    <div className='flex items-center px-4 py-3 border-b'>
      <div className='flex-1 flex flex-col items-start'>
        <div className='flex gap-2.5 items-center'>
          <div className='font-medium'>
            {order?.destinationTicket?.destination?.name}
          </div>
          <div className='text-xs px-3 rounded-full border-2 border-gray-300 capitalize'>
            {order?.destinationTicket?.touristType}
          </div>
          <div className='font-bold'>x{order?.quantity}</div>
        </div>
        <div className='mt-2.5 flex flex-col items-start sm:flex-row sm:items-center gap-2 text-gray-500'>
          <div className='flex items-center gap-0.5'>
            <Icon icon='carbon:person' width='16' />
            <span className='capitalize text-xs'>
              {order?.destinationTicket?.ageType}
              <span className='hidden sm:inline'>,</span>
            </span>
          </div>
          <div className='mt-1 sm:mt-0 flex items-center gap-2'>
            <div className='flex items-center gap-0.5'>
              <Icon icon='material-symbols:date-range' width='16' />
              <span className='text-xs'>
                {date}
                <span className='hidden sm:inline'>,</span>
              </span>
            </div>
            <div className='flex items-center gap-0.5'>
              <Icon icon='mdi:clock-outline' width='16' />
              <span className='text-xs'>
                {order?.destinationTicket?.dateTime}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className='text-sm sm:text-base font-medium text-primary'>
        Rp{order?.destinationTicket?.price}
      </div>
    </div>
  );
};

export default CardTransaksiItem;
