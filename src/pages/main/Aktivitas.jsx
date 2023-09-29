import ConstraintLarge from '../../layout/ConstraintLarge';
import { CardThumbnailAktivitas } from '../../components/card';
import Trekking from '../../assets/trekking.svg';
import Hiking from '../../assets/hiking.svg';
import Offroad from '../../assets/off_road.svg';
import Camping from '../../assets/camping.svg';
import Shopping from '../../assets/belanja.svg';

const Aktivitas = () => {
  const activities = [
    {
      name: 'Trekking',
      img: Trekking,
    },
    {
      name: 'Camping',
      img: Camping,
    },
    {
      name: 'Off Road',
      img: Offroad,
    },
    {
      name: 'Rekreasi Olahraga',
      img: Hiking,
    },
    {
      name: 'Berbelanja',
      img: Shopping,
    },
  ];
  return (
    <ConstraintLarge>
      <div className='flex items-center justify-between gap-2'>
        <h1 className='w-full text-xl font-bold text-center text-[#725201]'>
          Jelajahi Aktivitas Populer
        </h1>
      </div>
      <div className='w-full mt-3 layout-aktivitas'>
        {/* {isLoading ? (
          <div className='mt-24 flex justify-center items-center'>
            <Loading />
          </div>
        ) : ( */}
        {/* <div className='w-full mt-3 flex flex-col gap-4'>
            {events.map((event) => (
              <CardEvent key={event?.id} event={event} />
            ))}
            <Link to='/event'>
              <div className='px-4 py-2 bg-black/20 rounded-2xl text-center shadow text-black/75'>
                Lihat Semua
              </div>
            </Link>
          </div> */}
        {/* )} */}
        {activities.map((activity) => (
          <CardThumbnailAktivitas
            key={activity.name}
            name={activity.name}
            image={activity.img}
          />
        ))}
      </div>
    </ConstraintLarge>
  );
};

export default Aktivitas;
