import { Link } from 'react-router-dom';
import ConstraintLarge from '../../layout/ConstraintLarge';
import CardDestinasi from '../../components/card/CardDestinasi';
import { useEffect, useState } from 'react';
import { getAllDestinations } from '../../utils/destination';
import Loading from '../../components/loading/Loading';
import { CardSemua } from '../../components/card';

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
        <h1 className='w-full text-xl font-bold text-center text-[#725201]'>
          Destinasi
        </h1>
        {/* <Link to='/destinasi'>
          <div className='text-sm underline w-max text-black text-opacity-40'>
            Lihat semua
          </div>
        </Link> */}
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
            <CardSemua />
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
