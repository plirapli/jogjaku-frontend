import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

const DeskripsiPage = () => {
  const event = useOutletContext();
  const [isReadMore, setIsReadMore] = useState(false);
  const onChangeReadMoreHandle = () => {
    setIsReadMore((prev) => !prev);
  };

  return (
    <div>
      <div className=''>
        <h2 className='font-medium text-primaryDark'>Tanggal</h2>
        <div className='mt-2 flex items-center gap-2 p-3 border rounded-lg'>
          <Icon
            className='text-black text-opacity-50'
            icon='ic:twotone-date-range'
            width='22'
          />
          <p className='text-black text-opacity-75'>{event?.date}</p>
        </div>
      </div>
      <div className='mt-4'>
        <h2 className='font-medium text-primaryDark'>Deskripsi Umum</h2>
        <div className=' mt-1 flex flex-col gap-2'>
          <p
            className={`text-black text-opacity-75 ${
              !isReadMore && 'line-clamp-4'
            }`}
          >
            {event?.description}
          </p>
          <button
            onClick={onChangeReadMoreHandle}
            className='mt-0.5 w-fit px-4 py-2 border text-black text-opacity-60 text-sm rounded-md
            transition-all hover:text-opacity-100'
          >
            {isReadMore ? 'Tampilkan lebih sedikit' : 'Baca selengkapnya'}
          </button>
        </div>
      </div>
      <div className='mt-4'>
        <h2 className='font-medium text-primaryDark'>Lokasi</h2>
        <div className='mt-1 rounded-xl overflow-hidden border-2 border-primary'>
          <iframe
            className='w-full'
            src={event?.location}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default DeskripsiPage;
