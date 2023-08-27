import { useOutletContext } from 'react-router-dom';

const DeskripsiPage = () => {
  const destination = useOutletContext();

  return (
    <div>
      <div>
        <h2 className='text-sm font-bold'>Deskripsi Umum</h2>
        <div className='mt-1.5 flex flex-col gap-2'>
          <p>{destination?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DeskripsiPage;
