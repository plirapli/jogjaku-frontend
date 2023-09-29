import { useEffect, useState } from 'react';
import { CardEvent } from '../components/card/';
import ConstraintLarge from '../layout/ConstraintLarge';
import Loading from '../components/loading/Loading';
import { getAllEvents } from '../utils/event';
import { SearchBar } from '../components/form';

const EventPage = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [searchData, setSearchData] = useState({
    name: '',
    type: '',
  });
  const [isLoading, setIsLoading] = useState(true);

  const handleChangeSearch = (e) => {
    setSearchData({
      ...searchData,
      name: e.target.value,
    });
  };

  useEffect(() => {
    let filtered;

    //ambil data dari input field
    let { name } = searchData;

    //ubah format data menjadi lowercase dan tanpa spasi
    let keywordName = name.toLowerCase().trim();

    //filter by nama atau nim
    if (keywordName === '') {
      filtered = [...events];
    } else {
      filtered = events.filter(
        (event) => event?.name.toLowerCase()?.includes(keywordName)
        // event?.organizer.toLowerCase()?.includes(keywordName) // event?.type?.includes(type)
      );
    }

    setFilteredEvents([...filtered]);
  }, [searchData, events]);

  useEffect(() => {
    getAllEvents()
      .then(setEvents)
      .catch(({ data }) => {
        console.log(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className='pt-20'>
      <ConstraintLarge>
        <div className='text-center'>
          <h1 className='w-full text-2xl font-bold text-primary'>
            Event-event
          </h1>
          <p className='text-black text-opacity-40'>
            Temukan Beragam Acara Seru di Event Wisata Kami
          </p>
        </div>
        <div className='divider my-3'></div>
        <div className='mt-4 form-control w-full'>
          <SearchBar
            onChange={(e) => handleChangeSearch(e)}
            placeholder='Cari event'
            name='name'
            value={searchData?.name}
          />
        </div>
        {isLoading ? (
          <div className='mt-24 flex justify-center items-center'>
            <Loading />
          </div>
        ) : filteredEvents?.length ? (
          <div className='mt-4 flex flex-col gap-4'>
            {filteredEvents?.map((event) => (
              <CardEvent key={event?.id} event={event} />
            ))}
          </div>
        ) : (
          <div className='mt-4 text-center'>Data tidak ditemukan.</div>
        )}
      </ConstraintLarge>
    </div>
  );
};

export default EventPage;
