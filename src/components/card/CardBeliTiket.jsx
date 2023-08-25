import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { addToCartDestination } from '../../utils/cart';
import { OverlayLoading } from '../../components/overlay';

const CardBeliTiket = ({ name, ticket, date }) => {
  const [selectedTicket, setSelectedTicket] = useState({
    ticketId: ticket?.id,
    quantity: 0,
    date: date,
  });

  useEffect(() => {
    setSelectedTicket((prev) => ({
      ...prev,
      date: date,
    }));
  }, [date]);

  const [isLoading, setIsLoading] = useState(false);

  const onClickPlusHandle = () =>
    setSelectedTicket((prev) => ({ ...prev, quantity: prev.quantity + 1 }));

  const onClickMinusHandle = () => {
    if (selectedTicket?.quantity > 0)
      setSelectedTicket((prev) => ({ ...prev, quantity: prev.quantity - 1 }));
  };

  const onClickAddToCartHandle = () => {
    setIsLoading(true);

    addToCartDestination(selectedTicket)
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
          <div className='flex gap-2.5 items-center'>
            <div className='text-lg font-medium'>{name}</div>
            <div className='text-xs px-3 rounded-full border-2 border-gray-300'>
              {ticket?.touristType}
            </div>
          </div>
          <div className='text-lg font-medium text-yellow-400'>
            Rp{ticket?.price}
          </div>
        </div>

        {/* Tengah */}
        <div className='w-full flex items-center gap-4'>
          <div className='w-full text-gray-500'>
            <div className='flex items-center gap-1.5'>
              <Icon icon='carbon:person' width='20' />
              <span className='capitalize'>{ticket?.ageType}</span>
            </div>
            <div className='mt-2 flex items-center gap-1.5'>
              <Icon icon='mdi:clock-outline' width='20' />
              <span className='text-sm'>{ticket?.dateTime}</span>
            </div>
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
                ? 'bg-yellow-300 hover:bg-yellow-400 text-yellow-950 cursor-pointer'
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

export default CardBeliTiket;
