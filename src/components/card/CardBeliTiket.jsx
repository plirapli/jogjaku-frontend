import { Icon } from '@iconify/react';
import { useState } from 'react';
import { addToCartDestination } from '../../utils/cart';

const CardBeliTiket = ({ name, ticket, date }) => {
  const [selectedTicket, setSelectedTicket] = useState({
    ticketId: ticket?.id,
    date: date,
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
      <div className='flex-1 flex flex-col items-start gap-3'>
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
        <div className='w-full flex flex-col items-start sm:flex-row sm:items-end gap-4'>
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
        <div className='w-full flex items-center gap-3'>
          <button className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center'>
            Beli Langsung
          </button>
          <button
            onClick={onClickAddToCartHandle}
            className='text-yellow-950 bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center'
          >
            Tambah ke Keranjang
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardBeliTiket;
