import { useEffect, useState } from 'react';
import ConstraintLarge from '../layout/ConstraintLarge';
import { getAllActivites } from '../utils/activities';
import Loading from '../components/loading/Loading';
import { SearchBar } from '../components/form';
import CardAktivitas from '../components/card/CardAktivitas';

const AktivitasPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [aktivitas, setAktivitas] = useState([]);
  const [filteredAktivitas, setFilteredAktivitas] = useState([]);
  const [searchData, setSearchData] = useState({
    name: '',
    type: '',
  });

  const handleChangeSearch = (e, key) => {
    setSearchData({
      ...searchData,
      [key]: e.target.value,
    });
  };

  useEffect(() => {
    let filtered;

    let { name, type } = searchData;
    let searchKeyword = name.toLowerCase().trim();
    let selectedType = type.toLowerCase().trim();

    //filter by nama atau nim
    if (searchKeyword !== '') {
      filtered = aktivitas.filter((activity) =>
        activity?.name.toLowerCase()?.includes(searchKeyword)
      );
    } else {
      filtered = [...aktivitas];
    }

    //filter by divisi
    if (selectedType !== '') {
      filtered = filtered.filter((activity) => {
        return activity?.tag.toLowerCase().includes(selectedType);
      });
    }

    setFilteredAktivitas([...filtered]);
  }, [searchData, aktivitas]);

  useEffect(() => {
    getAllActivites()
      .then(({ activities }) => setAktivitas(() => [...activities]))
      .catch(({ data }) => {
        console.log(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const selectValue = [
    '',
    'Trekking',
    'Camping',
    'Off Road',
    'Rekreasi Olahraga',
    'Berbelanja',
  ];

  return (
    <div className='pt-20'>
      <ConstraintLarge>
        <div className='text-center'>
          <h1 className='w-full text-2xl font-bold text-primaryDark'>
            Aktivitas
          </h1>
          <p className='text-black text-opacity-40'>
            Jelajahi Aktivitas Tak Terlupakan
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
            onChange={(e) => handleChangeSearch(e, 'type')}
            className='bg-gray-50 border-l-0 border-gray-300 rounded-r-lg text-gray-900 text-sm focus:ring-0 focus:border-gray-300 block p-2.5'
          >
            {selectValue.map((name, i) => (
              <option className='capitalize' key={i} value={name}>
                {name ? name : 'Semua'}
              </option>
            ))}
          </select>
        </div>
        <div className='divider my-3'></div>
        {isLoading ? (
          <div className='mt-24 flex justify-center items-center'>
            <Loading />
          </div>
        ) : filteredAktivitas.length ? (
          <div className='mt-4 layout'>
            {filteredAktivitas.map((aktivitas, i) => (
              <CardAktivitas key={aktivitas?.id} data={aktivitas} />
            ))}
          </div>
        ) : (
          <div className='mt-4 text-center'>Aktivitas tidak ditemukan.</div>
        )}
      </ConstraintLarge>
    </div>
  );
};

export default AktivitasPage;
