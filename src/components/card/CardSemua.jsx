import { Link } from 'react-router-dom';

const CardSemua = ({ data }) => {
  return (
    <Link to={`/destinasi`}>
      <div className='flex flex-col bg-black/20 font-bold items-center justify-center border rounded-2xl shadow h-80 cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1'>
        Lihat Semua
      </div>
    </Link>
  );
};

export default CardSemua;
