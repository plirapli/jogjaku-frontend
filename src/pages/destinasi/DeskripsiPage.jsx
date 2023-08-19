import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getDestinationByID } from '../../utils/destination';

const DeskripsiPage = () => {
  const { destinationID } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [destination, setDestination] = useState({});

  useEffect(() => {
    getDestinationByID(destinationID)
      .then(({ destination }) => setDestination(() => ({ ...destination })))
      .catch(({ data }) => {
        console.log(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

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
