import { useOutletContext } from 'react-router-dom';

const DeskripsiPage = () => {
  const destination = useOutletContext();

  return (
    <div>
      <div>
        <h2 className='text-lg font-medium'>Deskripsi Umum</h2>
        <div className='mt-1.5 flex flex-col gap-2'>
          <p>{destination?.description}</p>
        </div>
      </div>
      <div className='mt-4'>
        <h2 className='text-lg font-medium'>Lokasi</h2>
        <div className='mt-1.5 flex flex-col gap-2'>
          <p>{destination?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DeskripsiPage;
