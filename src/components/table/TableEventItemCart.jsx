import { formatDate } from '../../utils/dateConverter';

const TableEventItemCart = ({ ticket }) => {
  const date = formatDate(ticket?.date);

  return (
    <>
      <table className='w-full text-sm text-left text-gray-500'>
        <tbody>
          <tr>
            <th scope='row' colSpan={4} className='pt-1 pb-0.5 capitalize'>
              <span className='text-primary mr-1.5'>
                {ticket?.eventTicket?.event?.name}
              </span>
              <span className='font-normal'>
                ({ticket?.eventTicket?.seatType || 'Umum'})
              </span>
            </th>
          </tr>
          <tr className='bg-white capitalize'>
            <td className='w-full pr-6 py-1.5 whitespace-nowrap dark:text-white'>
              {date}, {ticket?.eventTicket?.dateTime}
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
          <tr className='font-medium dark:text-white'>
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

export default TableEventItemCart;
