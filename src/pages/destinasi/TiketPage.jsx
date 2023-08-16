import { Icon } from '@iconify/react';

const TiketPage = () => {
  return (
    <div>
      <h2 className='text-lg leading-tight font-medium'>Beli Tiket</h2>
      <p className='text-black text-opacity-50'>Candi Borobudur</p>
      <div className='divider'></div>
      {/* Form */}
      <form className='mt-2'>
        <div className='grid gap-3 mb-3 md:grid-cols-3'>
          <div>
            <label
              htmlFor='last_name'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Jenis Wisatawan
            </label>
            <select
              id='countries'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            >
              <option selected value='lokal'>
                Domestik
              </option>
              <option value='turis'>Foreigner</option>
            </select>
          </div>
          <div>
            <label
              htmlFor='first_name'
              className='block mb-1.5 text-sm font-medium text-gray-900 dark:text-white'
            >
              Tanggal
            </label>
            <input
              type='date'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
              placeholder='Select date'
            />
          </div>
          <div>
            <label
              htmlFor='last_name'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
            >
              Waktu
            </label>
            <select
              id='countries'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            >
              <option hidden selected>
                Pilih waktu
              </option>
              <option value='pagi'>Pagi (06.00-14.00)</option>
              <option value='sore'>Sore (14.00-17.00)</option>
            </select>
          </div>
        </div>
        <div></div>
        <div className='flex items-center mb-3 gap-3'>
          <div className='w-full'>
            <div className='font-medium text-gray-900'>
              Dewasa {' (di atas 12 tahun)'}
            </div>
            <div className='text-sm text-black text-opacity-50 '>Rp50.000</div>
          </div>
          <div className='flex items-center gap-2'>
            <button
              type='button'
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full p-1 text-center inline-flex items-center'
            >
              <Icon icon='ic:baseline-minus' width='20' />
              <span className='sr-only'>Kurang</span>
            </button>
            <input
              type='text'
              disabled
              value={0}
              className='text-center w-10 px-2 py-1.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500'
            />

            <button
              type='button'
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full p-1 text-center inline-flex items-center'
            >
              <Icon icon='ic:baseline-plus' width='20' />
              <span className='sr-only'>Tambah</span>
            </button>
          </div>
        </div>
        <div className='flex items-center mb-3 gap-3'>
          <div className='w-full'>
            <div className='font-medium text-gray-900'>Anak (0-12 tahun)</div>
            <div className='text-sm text-black text-opacity-50 '>Rp25.000</div>
          </div>
          <div className='flex items-center gap-2'>
            <button
              type='button'
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full p-1 text-center inline-flex items-center'
            >
              <Icon icon='ic:baseline-minus' width='20' />
              <span className='sr-only'>Kurang</span>
            </button>
            <input
              type='text'
              disabled
              value={0}
              className='text-center w-10 px-2 py-1.5 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500'
            />

            <button
              type='button'
              className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full p-1 text-center inline-flex items-center'
            >
              <Icon icon='ic:baseline-plus' width='20' />
              <span className='sr-only'>Tambah</span>
            </button>
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <button
            type='submit'
            className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center'
          >
            Beli Langsung
          </button>
          <button
            type='submit'
            className='text-yellow-950 bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center'
          >
            Tambah ke Keranjang
          </button>
        </div>
      </form>
    </div>
  );
};

export default TiketPage;
