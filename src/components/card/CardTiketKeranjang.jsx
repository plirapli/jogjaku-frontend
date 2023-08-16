import { Icon } from '@iconify/react';

const CardTiketKeranjang = () => {
  return (
    <div className='flex border px-4 py-3 rounded-md'>
      <div className='flex-1 flex flex-col items-start'>
        <div className='flex gap-2.5 items-center'>
          <div className='font-medium text-lg'>Candi Borobudur</div>
          <div className='text-xs px-3 rounded-full border-2 border-gray-300'>
            Domestik
          </div>
          <div className='font-bold'>x6</div>
        </div>
        <div className='text-gray-500'>
          <div className='mt-0.5 flex items-center gap-1.5'>
            <Icon icon='carbon:person' width='20' />
            <span>Dewasa (di atas 12 tahun)</span>
          </div>
          <div className='mt-0.5 flex items-center gap-3'>
            <div className='flex items-center gap-1.5'>
              <Icon icon='material-symbols:date-range' width='20' />
              <span className='text-sm'>21 Agustus 2023</span>
            </div>
            <div className='flex items-center gap-1.5'>
              <Icon icon='mdi:clock-outline' width='20' />
              <span className='text-sm'>Pagi (06.00-14.00)</span>
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-between items-end'>
        <div className='text-lg font-medium text-yellow-400'>Rp35.000</div>
        <div className='text-xs text-gray-400 cursor-pointer transition-all hover:text-red-500'>
          <Icon icon='mdi:trash-outline' width='20' />
        </div>
      </div>
    </div>
  );
};

export default CardTiketKeranjang;
