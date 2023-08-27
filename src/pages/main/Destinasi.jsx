import { Link } from 'react-router-dom';
import ConstraintLarge from '../../layout/ConstraintLarge';
import CardDestinasi from '../../components/card/CardDestinasi';
import { useEffect, useState } from 'react';
import { getAllDestinations } from '../../utils/destination';
import Loading from '../../components/loading/Loading';

const Destinasi = () => {
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
    <ConstraintLarge>
      <div className='flex items-center justify-between gap-2'>
        <div>
          <h1 className='w-full text-2xl font-bold text-left text-primary'>
            Destinasi
          </h1>
          <div className='text-sm text-black text-opacity-50'>
            Temukan Perjalanan Tak Terlupakan di Destinasi Wisata Kami
          </div>
        </div>
        <Link to='/destinasi'>
          <div className='text-sm underline w-max text-black text-opacity-40'>
            Lihat semua
          </div>
        </Link>
      </div>
      <div className='w-full mt-3'>
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
      </div>
    </ConstraintLarge>
  );
};

export default Destinasi;
