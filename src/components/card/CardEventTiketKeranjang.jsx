import { Icon } from '@iconify/react';
import { formatDateWithDay } from '../../utils/dateConverter';

const CardEventTiketKeranjang = ({ ticket, onClickDeleteHandle }) => {
  const date = formatDateWithDay(ticket?.date);

  return (
    <div className='flex border px-4 py-3 rounded-md'>
      <div className='flex-1 flex flex-col items-start'>
        <div className='flex gap-2.5 items-center'>
          <div className='font-medium text-lg text-primary'>
            {ticket?.eventTicket?.event?.name}
          </div>
          <div className='font-bold'>x{ticket?.quantity}</div>
        </div>
        <div className='mt-1.5 text-gray-500'>
          <div className='flex items-center gap-1.5'>
            <Icon icon='material-symbols:chair-outline' width='18' />
            <span className='capitalize text-sm'>
              {ticket?.eventTicket?.seatType || 'Umum'}
            </span>
          </div>
          <div className='mt-1 flex items-center gap-3'>
            <div className='flex items-center gap-1.5'>
              <Icon icon='material-symbols:date-range' width='18' />
              <span className='text-sm'>{date}</span>
            </div>
            <div className='flex items-center gap-1.5'>
              <Icon icon='mdi:clock-outline' width='18' />
              <span className='text-sm'>{ticket?.eventTicket?.dateTime}</span>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-between items-end'>
        <div className='text-lg font-medium text-primary'>
          Rp{ticket?.eventTicket?.price}
        </div>
        <button
          onClick={() => onClickDeleteHandle(ticket?.id)}
          className='text-xs text-gray-400 cursor-pointer transition-all hover:text-red-500'
        >
          <Icon icon='mdi:trash-outline' width='20' />
        </button>
      </div>
    </div>
  );
};

export default CardEventTiketKeranjang;
