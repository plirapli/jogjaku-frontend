import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import CardTransaksiItem from './CardTransaksiItem';

const CardTransaksi = () => {
  return (
    <div>
      <Disclosure>
        {({ open }) => (
          <>
            <div className='rounded-lg overflow-hidden'>
              <Disclosure.Button className='w-full bg-gray-100 px-4 py-3 shadow text-left text-sm font-medium text-yellow-950 transition-all hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75'>
                <div className='flex w-full items-center gap-1.5'>
                  <div className='w-full'>
                    <div className='flex items-center gap-2'>
                      <div className='text-base font-bold'>
                        953f5e60-3773-4b4c-b506-a3bc25392242
                      </div>
                      <span className='text-xs px-2.5 py-0.5 font-bold text-green-600 bg-green-300 rounded-full'>
                        Selesai
                      </span>
                    </div>
                    <div className='mt-0.5 text-xs text-black text-opacity-50'>
                      12 Aug 2023, 08:00
                    </div>
                  </div>
                  <div className='text-base'>Rp35000</div>
                  <ChevronDownIcon
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-yellow-950`}
                  />
                </div>
              </Disclosure.Button>
              <Disclosure.Panel className='bg-gray-50 text-sm text-gray-500'>
                <CardTransaksiItem />
                <CardTransaksiItem />
              </Disclosure.Panel>
            </div>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default CardTransaksi;
