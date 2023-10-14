import { useEffect, useState } from 'react';
import CardDestinasi from '../components/card/CardDestinasi';
import ConstraintLarge from '../layout/ConstraintLarge';
import { getAllDestinations, regencyOption } from '../utils/destination';
import Loading from '../components/loading/Loading';
import { SearchBar } from '../components/form';
import { Icon } from '@iconify/react';

const DestinasiPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [destinations, setDestinations] = useState([]);
  const [filteredDestinations, setFilteredDestinations] = useState([]);
  const [searchData, setSearchData] = useState({
    name: '',
    regency: '',
  });

  const handleChangeSearch = (e, key) => {
    setSearchData({
      ...searchData,
      [key]: e.target.value,
    });
  };

  useEffect(() => {
    let filtered;
    let { name, regency } = searchData;
    let searchKeyword = name.toLowerCase().trim();
    let selectedLocation = regency.toLowerCase().trim();

    //filter by nama atau nim
    if (searchKeyword !== '') {
      filtered = destinations.filter((destination) =>
        destination?.name.toLowerCase()?.includes(searchKeyword)
      );
    } else {
      filtered = [...destinations];
    }

    // filter by divisi
    if (selectedLocation !== '') {
      filtered = filtered.filter((destination) => {
        return destination?.regency.toLowerCase().includes(selectedLocation);
      });
    }

    setFilteredDestinations([...filtered]);
  }, [searchData, destinations]);

  useEffect(() => {
    getAllDestinations()
      .then(({ destinations }) => setDestinations(() => [...destinations]))
      .catch(({ data }) => {
        console.log(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className='pt-20'>
      <ConstraintLarge>
        <div className='text-center'>
          <h1 className='w-full text-2xl font-bold text-primaryDark'>
            Destinasi Wisata
          </h1>
          <p className='text-black text-opacity-40'>
            Temukan Perjalanan Tak Terlupakan di Destinasi Wisata Kami
          </p>
        </div>

        <div className='mt-4 flex form-control w-full'>
          <input
            type='text'
            className='search-bar block border border-gray-300 rounded-l-lg w-full shadow-sm focus-primary input-primary sm:text-sm z-10'
            onChange={(e) => handleChangeSearch(e, 'name')}
            value={searchData?.name}
            placeholder='Cari aktivitas'
          />
          <select
            onChange={(e) => handleChangeSearch(e, 'regency')}
            value={searchData.regency}
            className='bg-gray-50 border-l-0 border-gray-300 rounded-r-lg text-gray-900 text-sm focus:ring-0 focus:border-gray-300 block p-2.5'
          >
            {regencyOption.map(({ name, value }, i) => (
              <option className='capitalize' key={i} value={value}>
                {name}
              </option>
            ))}
          </select>
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
          <div className='mt-4 text-center text-gray-dark'>
            Destinasi tidak ditemukan.
          </div>
        )}
      </ConstraintLarge>
    </div>
  );
};

export default DestinasiPage;
