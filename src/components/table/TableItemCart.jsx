import { formatDate } from '../../utils/dateConverter';

const TableItemCart = ({ ticket }) => {
  const date = formatDate(ticket?.createdAt);

  return (
    <>
      <table className='w-full text-sm text-left text-gray-500'>
        <tbody>
          <tr>
            <th scope='row' colSpan={2} className='pt-2.5 pb-0.5 capitalize'>
              {ticket?.destinationTicket?.destination?.name} (
              {ticket?.destinationTicket?.touristType})
            </th>
            <td
              colSpan={2}
              className='pt-2.5 pb-0.5 font-medium text-right px-6'
            >
              {date}
            </td>
          </tr>
          <tr className='bg-white capitalize'>
            <td className='w-full pr-6 py-1.5 whitespace-nowrap dark:text-white'>
              {ticket?.destinationTicket?.ageType},{' '}
              {ticket?.destinationTicket?.dateTime}
            </td>
            <td className='px-6 py-1.5 lowercase'>x{ticket?.quantity}</td>
            <td className='px-2 py-1.5'>Rp</td>
            <td className='px-6 py-1.5 text-right'>
              {ticket?.totalPrice / ticket?.quantity}
            </td>
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
            <td className='px-6 pt-3 pb-4 text-right'>{ticket?.totalPrice}</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default TableItemCart;
