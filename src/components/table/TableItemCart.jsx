const TableItemCart = () => {
  return (
    <>
      <table className='w-full text-sm text-left text-gray-500'>
        <tbody>
          <tr>
            <th scope='row' colSpan={3} className='py-2.5'>
              Candi Borobudur (Domestik)
            </th>
            <td className='font-medium text-right'>17/08/2023</td>
          </tr>
          <tr>
            <td colSpan={4} className='divider my-2.5'></td>
          </tr>
          <tr className='bg-white'>
            <td className='w-full pr-6 py-1.5 whitespace-nowrap dark:text-white'>
              Dewasa (di atas 12 tahun), Pagi (06.00-14.00)
            </td>
            <td className='px-6 py-1.5'>1</td>
            <td className='px-2 py-1.5'>Rp</td>
            <td className='px-6 py-1.5 text-right'>35.000</td>
          </tr>
          <tr className='bg-white'>
            <td className='w-full pr-6 py-1.5 whitespace-nowrap dark:text-white'>
              Dewasa (di atas 12 tahun), Pagi (06.00-14.00)
            </td>
            <td className='px-6 py-1.5'>1</td>
            <td className='px-2 py-1.5'>Rp</td>
            <td className='px-6 py-1.5 text-right'>35.000</td>
          </tr>
          <tr>
            <td colSpan={4} className='divider'></td>
          </tr>
        </tbody>
        <tfoot>
          <tr className='font-semibold dark:text-white'>
            <td colSpan={2} className='pr-6 pt-3 pb-4'>
              Sub total
            </td>
            <td className='px-2 pt-3 pb-4'>Rp</td>
            <td className='px-6 pt-3 pb-4 text-right'>105.000</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default TableItemCart;
