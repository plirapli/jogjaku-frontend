import ConstraintLarge from '../../layout/ConstraintLarge';
import { CardThumbnailAktivitas } from '../../components/card';
import { activityType } from '../../utils/activities';

const Aktivitas = () => {
  return (
    <ConstraintLarge>
      <div className='flex items-center justify-between gap-2'>
        <h1 className='w-full text-xl font-bold text-center text-primaryDark'>
          Jelajahi Aktivitas Populer
        </h1>
      </div>
      <div className='w-full mt-3 layout-aktivitas'>
        {activityType.map((activity) => (
          <CardThumbnailAktivitas key={activity.value} activity={activity} />
        ))}
      </div>
    </ConstraintLarge>
  );
};

export default Aktivitas;
