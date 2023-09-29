import { useOutletContext } from 'react-router-dom';

const DeskripsiPage = () => {
  const event = useOutletContext();

  return (
    <div>
      <div>
        <h2 className='font-bold text-primaryDark'>Deskripsi Umum</h2>
        <div className=' mt-1 flex flex-col gap-2'>
          <p>{event?.description}</p>
        </div>
      </div>
      <div className='mt-4'>
        <h2 className='font-bold text-primaryDark'>Tanggal</h2>
        <div className='mt-1 flex flex-col gap-2'>
          <p>{event?.date}</p>
        </div>
      </div>
      <div className='mt-4'>
        <h2 className='font-bold text-primaryDark'>Penyelenggara</h2>
        <div className='mt-1 flex flex-col gap-2'>
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
