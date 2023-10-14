import { Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef } from 'react';
import Button from '../buttons/Button';
import QRCode from '../../utils/qrcode';

const ModalTiketAktif = ({ activeRef, show, closeHandler, ticket, date }) => {
  const qrCodeRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      if (qrCodeRef.current) {
        qrCodeRef.current.innerHTML = '';
        new QRCode(qrCodeRef.current, {
          text: ticket?.id,
          width: 128,
          height: 128,
        });
      }
    }, 50);
  }, [activeRef]);

  return (
    <Transition appear show={show} as={Fragment}>
      <div className='relative z-50'>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>
        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              {/* Main Container */}
              <div className='w-full max-w-md transform overflow-hidden rounded-md bg-white text-left align-middle shadow-xl transition-all'>
                <div className='w-full bg-primary py-1'></div>

                {/* Body */}
                <div className='p-4'>
                  <div className='mt-2'>
                    <div className='font-medium text-xs text-black/40'>
                      DESTINASI
                    </div>
                    <div className='text-primary text-lg'>
                      {ticket?.destinationTicket?.destination?.name}
                    </div>
                  </div>
                  <div className='flex gap-3 mt-2.5'>
                    <div className='w-full'>
                      <div className='font-medium text-xs text-black/40'>
                        JENIS TIKET
                      </div>
                      <div className='text-sm text-black'>
                        {ticket?.destinationTicket?.touristType}
                      </div>
                    </div>
                    <div className='w-full'>
                      <div className='font-medium text-xs text-black/40'>
                        KATEGORI USIA
                      </div>
                      <div className='text-sm text-black capitalize'>
                        {ticket?.destinationTicket?.ageType}
                      </div>
                    </div>
                  </div>
                  <div className='flex gap-3 mt-2.5'>
                    <div className='w-full'>
                      <div className='font-medium text-xs text-black/40'>
                        TANGGAL
                      </div>
                      <div className='text-sm text-black'>{date}</div>
                    </div>
                    <div className='w-full'>
                      <div className='font-medium text-xs text-black/40'>
                        JAM
                      </div>
                      <div className='text-sm text-black'>
                        {ticket?.destinationTicket?.dateTime}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='divider my-0'></div>
                <div className='my-2 flex flex-col items-center'>
                  <div className='mt-3' ref={qrCodeRef}></div>
                  <div className='mt-0.5 font-bold text-lg font-mono'>
                    {ticket?.id}
                  </div>
                </div>
                <div className='divider my-0'></div>
                <div className='p-4'>
                  <Button
                    type='button'
                    onClick={closeHandler}
                    color='gray'
                    size='small'
                  >
                    Tutup
                  </Button>
                </div>
              </div>
              {/* End Main Container */}
            </Transition.Child>
          </div>
        </div>
      </div>
    </Transition>
  );
};

export default ModalTiketAktif;
