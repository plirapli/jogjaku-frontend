import { useEffect, useState } from 'react';
import CardDestinasi from '../components/card/CardDestinasi';
import ConstraintLarge from '../layout/ConstraintLarge';
import { getAllDestinations } from '../utils/destination';
import Loading from '../components/loading/Loading';
import { Input, SearchBar } from '../components/form';

const DestinasiPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [destinations, setDestinations] = useState([]);
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [keyword, setKeyword] = useState('');

  const handleChangeSearch = (event) => setKeyword(event.target.value);

  useEffect(() => {
    let filtered;
    let searchKeyword = keyword.toLowerCase().trim();

    //filter by nama atau nim
    if (searchKeyword !== '') {
      filtered = destinations.filter((destination) =>
        destination?.name.toLowerCase()?.includes(searchKeyword)
      );
    } else {
      filtered = [...destinations];
    }

    setFilteredDestinations([...filtered]);
  }, [keyword, destinations]);

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
        <div className='mt-4 form-control w-full'>
          <SearchBar
            onChange={(e) => handleChangeSearch(e)}
            value={keyword}
            placeholder='Cari destinasi'
          />
        </div>
        <div className='divider my-3'></div>
        {isLoading ? (
          <div className='mt-24 flex justify-center items-center'>
            <Loading />
          </div>
        ) : filteredDestinations.length ? (
          <div className='mt-4 layout'>
            {filteredDestinations.map((destination, i) => (
              <CardDestinasi key={destination?.id} data={destination} />
            ))}
          </div>
        ) : (
          <div className='mt-4 text-center'>Data tidak ditemukan.</div>
        )}
      </ConstraintLarge>
    </div>
  );
};

export default DestinasiPage;
