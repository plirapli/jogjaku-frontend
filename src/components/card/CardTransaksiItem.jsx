import { Icon } from '@iconify/react';
import { formatDateWithDay } from '../../utils/dateConverter';

const CardTransaksiItem = ({ ticket }) => {
  // const date = formatDateWithDay(ticket?.createdAt);

  return (
    <div className='flex items-center px-4 py-3 border-b'>
      <div className='flex-1 flex flex-col items-start'>
        <div className='flex gap-2.5 items-center'>
          <div className='font-medium'>
            {/* {ticket?.destinationTicket?.destination?.name} */}
            Candi Prambanan
          </div>
          <div className='text-xs px-3 rounded-full border-2 border-gray-300 capitalize'>
            {/* {ticket?.destinationTicket?.touristType} */}
            Domestic
          </div>
          <div className='font-bold'>x{/* {ticket?.quantity} */}6</div>
        </div>
        <div className='mt-1.5 flex items-center gap-2.5 text-gray-500'>
          <div className='flex items-center gap-0.5'>
            <Icon icon='carbon:person' width='16' />
            <span className='capitalize text-xs'>
              {/* {ticket?.destinationTicket?.ageType} */} Adult
            </span>
          </div>
          <div className='flex items-center gap-0.5'>
            <Icon icon='material-symbols:date-range' width='16' />
            <span className='text-xs'>
              {/* {ticket?.destinationTicket?.dateTime} */}12 Agustus 2023,
              12:00
            </span>
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

export default CardTransaksiItem;
