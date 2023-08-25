import { Icon } from '@iconify/react';
import { formatDateLongMonth } from '../../utils/dateConverter';

const CardTiketAktif = ({ ticket }) => {
  const date = formatDateLongMonth(ticket?.createdAt);

  return (
    <div className='px-4 py-3 border rounded-md'>
      <div className='flex gap-3 items-center justify-between'>
        <div className='w-full flex gap-2.5 items-center'>
          <div className='font-medium text-primary'>
            {ticket?.destinationTicket?.destination?.name}
          </div>
          <div className='text-xs px-3 rounded-full border-2 border-gray-300 capitalize'>
            {ticket?.destinationTicket?.touristType}
          </div>
        </div>
        <div className='text-gray-500 min-w-fit flex items-center gap-0.5'>
          <Icon icon='material-symbols:date-range' width='16' />
          <span className='text-sm'>{date}</span>
        </div>
      </div>
      <div className='mt-0.5 font-bold text-xl font-mono'>{ticket?.id}</div>
      <div className='mt-1.5 flex flex-col items-start sm:flex-row sm:items-center gap-2 text-gray-500'>
        <div className='flex items-center gap-0.5'>
          <Icon icon='carbon:person' width='16' />
          <span className='capitalize text-xs'>
            {ticket?.destinationTicket?.ageType}
            <span className='hidden sm:inline'>,</span>
          </span>
        </div>
        <div className='mt-1 sm:mt-0 flex items-center gap-2'>
          <div className='flex items-center gap-0.5'>
            <Icon icon='mdi:clock-outline' width='16' />
            <span className='text-xs'>
              {ticket?.destinationTicket?.dateTime}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardTiketAktif;
