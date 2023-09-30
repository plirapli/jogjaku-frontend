import { createRef, useEffect } from 'react';
import { formatDateLongMonth } from '../../utils/dateConverter';
import { Icon } from '@iconify/react';
import QRCode from '../../utils/qrcode';

const CardEventTiketAktif = ({ ticket }) => {
  const date = formatDateLongMonth(ticket?.createdAt);
  const qrCodeRef = createRef();
  useEffect(() => {
    qrCodeRef.current.innerHTML = '';
    new QRCode(qrCodeRef.current, {
      text: ticket?.id,
      width: 128,
      height: 128,
    });
  }, []);

  return (
    <div className='px-3 py-2 border rounded-md'>
      <div className='flex flex-col-reverse sm:flex-row gap-1 sm:gap-3 sm:items-center sm:justify-between'>
        <div className='w-full flex flex-col sm:flex-row gap-1 sm:gap-2.5 items-start sm:items-center'>
          <div className='text-sm font-medium text-primary'>
            {ticket?.eventTicket?.event?.name}&nbsp;(
            {ticket?.eventTicket?.seatType || 'Umum'})
          </div>
          <div className='text-xs px-2 rounded-full border border-primary text-primary capitalize'>
            Event
          </div>
        </div>
        <div className='text-gray-dark min-w-fit text-xs'>{date}</div>
      </div>
      <div className='flex flex-col items-center'>
        <div className='mt-3' ref={qrCodeRef}></div>
        <div className='mt-0.5 font-bold text-lg font-mono'>{ticket?.id}</div>
      </div>
      <div className='mt-1 flex items-center gap-0.5 text-gray-500'>
        <Icon icon='mdi:clock-outline' width='16' />
        <span className='text-xs'>{ticket?.eventTicket?.dateTime}</span>
      </div>
    </div>
  );
};

export default CardEventTiketAktif;
