import { ConstraintLarge } from '../../layout';
import CardTiketKeranjang from '../../components/card/CardTiketKeranjang';
import TableItemCart from '../../components/table/TableItemCart';

const KeranjangPage = () => {
  return (
    <div className='pt-20'>
      <ConstraintLarge>
        <h1 className='w-full text-xl font-bold text-primary'>
          Keranjang Saya
        </h1>
        <p className='text-black text-opacity-40'>Lorem ipsum dolor sit amet</p>
        <div className='divider'></div>
        <div className='flex flex-col lg:flex-row lg:items-start gap-3'>
          <div className='w-full space-y-3'>
            <CardTiketKeranjang />
            <CardTiketKeranjang />
            <CardTiketKeranjang />
          </div>

          {/* Rincian harga */}
          <div className='w-full border px-4 py-3 rounded-md'>
            <h2 className='text-lg leading-tight font-medium mb-2'>
              Rincian Harga
            </h2>
            <div className='divider my-1'></div>

            {/* Tabel rincian harga */}
            <div className='relative overflow-x-auto'>
              <TableItemCart />
              <TableItemCart />
              <TableItemCart />
              <div className='divider my-1'></div>

              {/* Total pembayaran */}
              <table className='w-full text-sm text-left text-gray-500'>
                <tfoot>
                  <tr className='font-semibold dark:text-white'>
                    <td colSpan={3} className='pr-6 py-1 text-base'>
                      Sub total pembayaran
                    </td>
                    <td className='px-2 py-1'>Rp</td>
                    <td className='px-6 py-1 text-right'>105.000</td>
                  </tr>
                  <tr className='font-semibold dark:text-white'>
                    <td colSpan={3} className='pr-6 py-1 text-base'>
                      Biaya admin (10%)
                    </td>
                    <td className='px-2 py-1'>Rp</td>
                    <td className='px-6 py-1 text-right'>10.500</td>
                  </tr>
                  <tr className='font-semibold text-gray-900 dark:text-white'>
                    <th
                      scope='row'
                      colSpan={3}
                      className='w-full pr-6 py-1 text-base'
                    >
                      Total Pembayaran
                    </th>
                    <td className='px-2 py-1'>Rp</td>
                    <td className='px-6 py-1 text-right'>115.500</td>
                  </tr>
                </tfoot>
              </table>
              <button
                type='button'
                className='w-full text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-md text-sm px-5 py-2.5 text-center mt-4'
              >
                Lanjutkan Pembayaran
              </button>
            </div>
          </div>
        </div>
      </ConstraintLarge>
    </div>
  );
};

export default KeranjangPage;
