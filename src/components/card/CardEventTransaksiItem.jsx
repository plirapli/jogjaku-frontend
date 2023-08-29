import { Icon } from '@iconify/react';
import { formatDateLongMonth } from '../../utils/dateConverter';

const CardEventTransaksiItem = ({ order }) => {
  const date = formatDateLongMonth(order?.createdAt);

  return (
    <div className='flex items-center px-4 py-3 border-b'>
      <div className='flex-1 flex flex-col items-start'>
        <div className='flex gap-2.5 items-center'>
          <div className='font-medium text-primary'>
            {order?.eventTicket?.event?.name}
            &nbsp;({order?.eventTicket?.seatType || 'Umum'})
          </div>
          <div className='text-xs px-2 rounded-full border border-primary text-primary capitalize'>
            Event
          </div>
          <div className='font-bold'>x{order?.quantity}</div>
        </div>
        <div className='mt-2.5 flex flex-col items-start sm:flex-row sm:items-center gap-2 text-gray-500'>
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
              <span className='text-xs'>{order?.eventTicket?.dateTime}</span>
            </div>
          </div>
        </div>
      </div>
      <div className='text-sm sm:text-base font-medium text-primary'>
        Rp{order?.eventTicket?.price}
      </div>
    </div>
  );
};

export default CardEventTransaksiItem;
