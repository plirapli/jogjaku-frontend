import { Icon } from '@iconify/react';
import { formatDateLongMonth } from '../../utils/dateConverter';
import QRCode from '../../utils/qrcode';
import { createRef, useEffect } from 'react';

const CardTiketAktif = ({ ticket }) => {
  const date = formatDateLongMonth(ticket?.createdAt);
  const qrCodeRef = createRef();
  // const generateQRCode = (text) => new QRCode(text)
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
      <div className='flex flex-col-reverse gap-1'>
        <div className='w-full flex flex-col gap-1.5 items-start'>
          <div className='text-sm font-medium text-primary'>
            {ticket?.destinationTicket?.destination?.name}&nbsp;(
            {ticket?.destinationTicket?.touristType})
          </div>
          <div className='text-xs px-2 rounded-full border border-primary text-primary capitalize'>
            Destinasi
          </div>
        </div>
        <div className='text-gray-dark min-w-fit text-xs'>{date}</div>
      </div>
      <div className='flex flex-col items-center'>
        <div className='mt-3' ref={qrCodeRef}></div>
        <div className='mt-0.5 font-bold text-lg font-mono'>{ticket?.id}</div>
      </div>
      <div className='mt-2 flex flex-row items-center justify-between gap-1.5 text-gray-500'>
        <div className='flex items-center gap-0.5'>
          <Icon icon='carbon:person' width='16' />
          <span className='capitalize text-xs'>
            {ticket?.destinationTicket?.ageType}
          </span>
        </div>
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
