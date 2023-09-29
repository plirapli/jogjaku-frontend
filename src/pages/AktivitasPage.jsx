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
  const [keyword, setKeyword] = useState('');

  const handleChangeSearch = (event) => setKeyword(event.target.value);

  useEffect(() => {
    let filtered;
    let searchKeyword = keyword.toLowerCase().trim();

    //filter by nama atau nim
    if (searchKeyword !== '') {
      filtered = aktivitas.filter((activity) =>
        activity?.name.toLowerCase()?.includes(searchKeyword)
      );
    } else {
      filtered = [...aktivitas];
    }

    setFilteredAktivitas([...filtered]);
  }, [keyword, aktivitas]);

  useEffect(() => {
    getAllActivites()
      .then(({ activities }) => setAktivitas(() => [...activities]))
      .catch(({ data }) => {
        console.log(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className='pt-20'>
      <ConstraintLarge>
        <div className='text-center'>
          <h1 className='w-full text-2xl font-bold text-primary'>Aktivitas</h1>
          <p className='text-black text-opacity-40'>
            Jelajahi Aktivitas Tak Terlupakan
          </p>
        </div>
        <div className='mt-4 form-control w-full'>
          <SearchBar
            onChange={(e) => handleChangeSearch(e)}
            value={keyword}
            placeholder='Cari aktivitas'
          />
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
          <div className='mt-4 text-center'>Data tidak ditemukan.</div>
        )}
      </ConstraintLarge>
    </div>
  );
};

export default AktivitasPage;
