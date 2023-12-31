import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import CardTransaksiItem from './CardTransaksiItem';
import Button from '../buttons/Button';
import { formatDateLongWithHour } from '../../utils/dateConverter';
import CardEventTransaksiItem from './CardEventTransaksiItem';

const CardTransaksi = ({ payment }) => {
  const onClickPayHandle = (e, payment) => {
    e.stopPropagation();
    window.snap.pay(payment?.snapToken);
  };

  return (
    <div>
      <Disclosure>
        {({ open }) => (
          <>
            <div className='rounded-lg overflow-hidden'>
              <Disclosure.Button className='flex flex-col w-full bg-gray-100 px-4 py-3 shadow text-left text-sm font-medium text-yellow-950 transition-all hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-opacity-75'>
                <div className='flex w-full items-center gap-1.5'>
                  <div className='w-full'>
                    <div className='flex items-center gap-2'>
                      <div className='text-base font-bold'>{payment?.id}</div>
                      <span
                        className={`text-xs px-2.5 py-0.5 rounded-full ${
                          payment?.status === 'settlement'
                            ? 'text-green-600 bg-green-300'
                            : payment?.status === 'pending'
                            ? 'text-yellow-500 bg-yellow-200'
                            : 'text-gray-dark bg-gray-300'
                        }`}
                      >
                        {payment?.status === 'settlement'
                          ? 'Selesai'
                          : payment?.status === 'pending'
                          ? 'Pending'
                          : 'Expired'}
                      </span>
                    </div>
                    <div className='mt-0.5 text-xs text-black text-opacity-50'>
                      {formatDateLongWithHour(payment?.createdAt)}
                    </div>
                  </div>
                  <div className='text-base'>Rp{payment?.price}</div>
                  <ChevronDownIcon
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } h-5 w-5 text-yellow-950`}
                  />
                </div>
                {payment?.status === 'pending' && (
                  <div className='sm:w-fit w-full mt-3'>
                    <Button onClick={(e) => onClickPayHandle(e, payment)}>
                      Bayar Sekarang
                    </Button>
                  </div>
                )}
              </Disclosure.Button>
              <Disclosure.Panel className='bg-gray-50 text-sm text-gray-500'>
                {payment?.orders?.map((order) => {
                  return order?.destinationTicketId ? (
                    <CardTransaksiItem key={order?.id} order={order} />
                  ) : (
                    <CardEventTransaksiItem key={order?.id} order={order} />
                  );
                })}
              </Disclosure.Panel>
            </div>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default CardTransaksi;
