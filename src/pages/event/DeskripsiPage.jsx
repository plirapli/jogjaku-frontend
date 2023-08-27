import { useOutletContext } from 'react-router-dom';

const DeskripsiPage = () => {
  const event = useOutletContext();

  return (
    <div>
      <div>
        <h2 className='text-sm font-bold'>Deskripsi Umum</h2>
        <div className=' mt-1.5 flex flex-col gap-2'>
          <p>{event?.description}</p>
        </div>
      </div>
      <div className='mt-4'>
        <h2 className='text-sm font-bold'>Tanggal</h2>
        <div className='mt-1.5 flex flex-col gap-2'>
          <p>{event?.date}</p>
        </div>
      </div>
      <div className='mt-4'>
        <h2 className='text-sm font-bold'>Penyelenggara</h2>
        <div className='mt-1.5 flex flex-col gap-2'>
          <p>{event?.organizer}</p>
        </div>
      </div>
      {/* <div className='mt-4'>
        <h2 className='text-lg font-medium'>Lokasi</h2>
        <div className='mt-1.5 flex flex-col gap-2'>
          <iframe
            height='170'
            src={`https://maps.google.com/maps?q='${lat}','${long}'&hl=es&z=14&amp;output=embed`}
          ></iframe>
        </div>
      </div> */}
    </div>
  );
};

export default DeskripsiPage;
