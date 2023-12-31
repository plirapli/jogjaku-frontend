import ConstraintLarge from '../../layout/ConstraintLarge';
import CardDestinasi from '../../components/card/CardDestinasi';
import { Fragment, useEffect, useState } from 'react';
import {
  getAllDestinations,
  getAllDestinationsPerRegion,
} from '../../utils/destination';
import Loading from '../../components/loading/Loading';
import { Tab } from '@headlessui/react';

const Destinasi = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [destinations, setDestinations] = useState({});
  const [selectedRegion, setSelectedRegion] = useState(0);

  const changeRegionHandler = (region) => {
    console.log(region);
    setSelectedRegion(region);
  };

  useEffect(() => {
    getAllDestinationsPerRegion()
      .then(setDestinations)
      .catch(({ data }) => {
        console.log(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const menuDaerah = [
    'Semua',
    'Kota Yogyakarta',
    'Sleman',
    'Kulon Progo',
    'Bantul',
    'Gunung Kidul',
  ];

  return (
    <ConstraintLarge>
      <div className='flex items-center justify-between gap-2'>
        <h1 className='w-full text-xl font-bold text-center text-primaryDark'>
          Destinasi
        </h1>
      </div>
      <div className='w-full mt-3'>
        {isLoading ? (
          <div className='mt-24 flex justify-center items-center'>
            <Loading />
          </div>
        ) : (
          <Tab.Group
            selectedIndex={selectedRegion}
            onChange={setSelectedRegion}
          >
            <Tab.List className='flex flex-col rounded-3xl sm:flex-row sm:space-x-1 sm:rounded-full bg-[#EEEEEE] border p-1'>
              {menuDaerah.map((daerah, i) => (
                <Tab key={i} as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={`w-full rounded-full py-2.5 text-sm leading-5 ring-white focus:outline-none focus:ring-2 ${
                        selected
                          ? 'shadow bg-primary text-white ring-offset-white'
                          : 'text-black/50 transition-all hover:bg-black/5'
                      }`}
                    >
                      {daerah}
                    </button>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className='mt-4'>
              {Object.values(destinations).map((regencies, i) => (
                <Tab.Panel key={i} className='layout'>
                  {regencies.map((destination) => (
                    <CardDestinasi key={destination?.id} data={destination} />
                  ))}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        )}
      </div>
    </ConstraintLarge>
  );
};

export default Destinasi;
