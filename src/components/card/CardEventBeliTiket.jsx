import { Icon } from '@iconify/react';
import { useState } from 'react';
import { addToCartEvent } from '../../utils/cart';
import { OverlayLoading } from '../overlay';

const CardEventBeliTiket = ({ name, ticket }) => {
  const [selectedTicket, setSelectedTicket] = useState({
    ticketId: ticket?.id,
    quantity: 0,
  });

  const [isLoading, setIsLoading] = useState(false);

  const onClickPlusHandle = () =>
    setSelectedTicket((prev) => ({ ...prev, quantity: prev.quantity + 1 }));

  const onClickMinusHandle = () => {
    if (selectedTicket?.quantity > 0)
      setSelectedTicket((prev) => ({ ...prev, quantity: prev.quantity - 1 }));
  };

  const onClickAddToCartHandle = () => {
    setIsLoading(true);
    addToCartEvent(selectedTicket)
      .then(() => {
        setSelectedTicket((prev) => ({ ...prev, quantity: 0 }));
      })
      .catch(({ data }) => {
        console.log(data);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className='flex border px-4 py-3 rounded-md'>
      <div className='flex-1 flex flex-col items-start gap-2'>
        {/* Header */}
        <div className='w-full flex gap-4 justify-between'>
          <div>
            <div className='font-medium'>{name}</div>
            <div className='w-fit mt-1.5 text-xs px-3 rounded-full border-2 border-gray-300'>
              {ticket?.date}
            </div>
          </div>
          <div className='text-lg font-medium text-primary'>
            Rp{ticket?.price}
          </div>
        </div>

        {/* Tengah */}
        <div className='w-full flex items-center gap-4'>
          <div className='w-full'>
            <div className='flex items-center gap-2 text-gray-500'>
              <div className='flex items-center gap-1.5'>
                <Icon icon='material-symbols:chair-outline' width='18' />
                <span className='text-sm capitalize'>
                  {ticket?.seatType || 'Umum'}
                </span>
              </div>
              ∙
              <div className='flex items-center gap-1'>
                <Icon icon='mdi:clock-outline' width='18' />
                <span className='text-sm'>{ticket?.dateTime}</span>
              </div>
            </div>

            {/* Quota */}
            {ticket?.seatAvailable && (
              <div className='flex items-center gap-1 mt-1.5 text-sm text-gray-dark'>
                <Icon icon='carbon:ticket' width='18' />
                Tiket tersedia
                <span
                  className={`ml-1 text-base font-semibold ${
                    ticket?.seatAvailable <= 5
                      ? 'text-danger-main'
                      : 'text-black'
                  }`}
                >
                  {ticket?.seatAvailable}
                </span>
              </div>
            )}
          </div>

          {/* Tombol +/- */}
          <div className='flex items-center gap-2'>
            <button
              onClick={onClickMinusHandle}
              type='button'
              className='text-white bg-zinc-700 hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full p-1 text-center inline-flex items-center transition-all'
            >
              <Icon icon='ic:baseline-minus' width='20' />
              <span className='sr-only'>Kurang</span>
            </button>
            <input
              type='text'
              disabled
              value={selectedTicket?.quantity}
              className='text-center w-10 px-2 py-1.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500'
            />

            <button
              onClick={onClickPlusHandle}
              type='button'
              className='text-white bg-zinc-700 hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full p-1 text-center inline-flex items-center transition-all'
            >
              <Icon icon='ic:baseline-plus' width='20' />
              <span className='sr-only'>Tambah</span>
            </button>
          </div>
        </div>

        {/* Tombol beli/keranjang */}
        <button
          onClick={onClickAddToCartHandle}
          disabled={selectedTicket?.quantity <= 0}
          className={`flex items-center flex-row-reverse sm:flex-row gap-2 sm:self-end 
            sm:rounded-full w-full sm:max-w-fit 
            transition-all
            focus:ring-4 focus:outline-none focus:ring-white 
            font-medium rounded-lg 
            text-sm px-5 py-2.5 text-center ${
              selectedTicket?.quantity
                ? 'bg-yellow-300 hover:bg-primary text-yellow-950 cursor-pointer'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
        >
          <Icon icon='mdi:cart-outline' width='18' />
          <span className='w-full text-left sm:text-center'>
            Tambah ke Keranjang
          </span>
        </button>
      </div>
      <OverlayLoading loadingState={isLoading} />
    </div>
  );
};

export default CardEventBeliTiket;
