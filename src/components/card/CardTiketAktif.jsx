import { Icon } from '@iconify/react';
import { formatDateLongMonth } from '../../utils/dateConverter';

const CardTiketAktif = ({ ticket }) => {
  const date = formatDateLongMonth(ticket?.createdAt);

  return (
    <div className='px-3 py-2 border rounded-md'>
      <div className='flex flex-col-reverse sm:flex-row gap-1 sm:gap-3 sm:items-center sm:justify-between'>
        <div className='w-full flex flex-col sm:flex-row gap-1 sm:gap-2.5 items-start sm:items-center'>
          <div className='font-medium text-primary'>
            {ticket?.destinationTicket?.destination?.name}&nbsp;(
            {ticket?.destinationTicket?.touristType})
          </div>
          <div className='text-xs px-2 rounded-full border border-primary text-primary capitalize'>
            Destinasi
          </div>
        </div>
        <div className='text-gray-dark min-w-fit text-xs sm:text-sm'>
          {date}
        </div>
      </div>
      <div className='mt-2 sm:mt-0.5 font-bold text-xl font-mono'>
        {ticket?.id}
      </div>
      <div className='mt-1 flex flex-row items-center gap-1.5 text-gray-500'>
        <div className='flex items-center gap-0.5'>
          <Icon icon='carbon:person' width='16' />
          <span className='capitalize text-xs'>
            {ticket?.destinationTicket?.ageType}
          </span>
        </div>
        <div>∙</div>
        <div className='mt-0 flex items-center gap-2'>
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
