import { useOutletContext } from 'react-router-dom';

const DeskripsiPage = () => {
  const destination = useOutletContext();

  return (
    <div>
      <div>
        <h2 className='font-bold'>Deskripsi Umum</h2>
        <div className='mt-1.5 flex flex-col gap-2'>
          <p>{destination?.description}</p>
        </div>
      </div>
      <div className='mt-4'>
        <h2 className='font-bold'>Lokasi</h2>
        <div className='mt-1.5 rounded-xl overflow-hidden border-2 border-primary'>
          <iframe
            className='w-full'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.3559336818375!2d110.49146739999999!3d-7.752020600000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5ae3dbd859d1%3A0x19e7a03b25955a2d!2sPrambanan%20Temple!5e0!3m2!1sen!2sid!4v1695922723902!5m2!1sen!2sid'
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
