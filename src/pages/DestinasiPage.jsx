import { useEffect, useState } from 'react';
import CardDestinasi from '../components/card/CardDestinasi';
import ConstraintLarge from '../layout/ConstraintLarge';
import { getAllDestinations } from '../utils/destination';
import Loading from '../components/loading/Loading';

const DestinasiPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    getAllDestinations()
      .then(({ destinations }) => setDestinations(() => [...destinations]))
      .catch(({ data }) => {
        console.log(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className='pt-24'>
      <ConstraintLarge>
        <div className='text-center'>
          <h1 className='w-full text-2xl font-bold text-primary'>
            Destinasi Wisata
          </h1>
          <p className='text-black text-opacity-40'>
            Temukan Perjalanan Tak Terlupakan di Destinasi Wisata Kami
          </p>
        </div>
        <div className='divider my-3'></div>
        {isLoading ? (
          <div className='mt-24 flex justify-center items-center'>
            <Loading />
          </div>
        ) : (
          <div className='mt-4 layout'>
            {destinations.map((destination) => (
              <CardDestinasi key={destination?.id} data={destination} />
            ))}
          </div>
        )}
        {/* : (
           <div className='mt-4 text-center'>Data tidak ditemukan.</div>
         )} */}
      </ConstraintLarge>
    </div>
  );
};

export default DestinasiPage;
