import { useState } from 'react';
import { formatDateLongMonth } from '../../utils/dateConverter';
import mega_mendung from '../../assets/pattern-mega-mendung.png';
import ModalTiketAktif from '../modal/ModalTiketAktif';

const CardTiketAktif = ({ ticket }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toggleRef, setToggleRef] = useState(false);
  const date = formatDateLongMonth(ticket?.createdAt);
  const openModalHandler = () => {
    setToggleRef((prev) => !prev);
    setIsModalOpen(true);
  };
  const closeModalHandler = () => setIsModalOpen(false);

  return (
    <div>
      <div
        className='z-10 relative overflow-hidden bg-primary bg-opacity-5
                 flex gap-4 items-center justify-between px-3 py-2.5 
                 border border-primary rounded-md'
      >
        <div className='-z-10 left-0 absolute opacity-[8%] w-full h-full bg-gradient-to-r from-black/0 to- rounded-r-full overflow-hidden'>
          <img src={mega_mendung} alt='' className='w-full object-cover' />
        </div>
        <div className='flex flex-col gap-1'>
          <div className='text-gray-dark min-w-fit text-xs'>{date}</div>
          <div className='text-sm font-medium text-primaryDark'>
            {ticket?.destinationTicket?.destination?.name}
          </div>
          <div className='mt-0.5 flex gap-2 items-center'>
            <div className='text-xs px-2 rounded bg-primary/30 text-primaryDark/75 capitalize'>
              Destinasi
            </div>
            <div className='text-xs px-2 rounded bg-primary/30 text-primaryDark/75 capitalize'>
              {ticket?.destinationTicket?.touristType}
            </div>
          </div>
        </div>
        {ticket?.id && (
          <button
            onClick={openModalHandler}
            className='mt-0.5 w-fit px-4 py-2 bg-primary text-white text-sm rounded-md
            transition-all hover:text-opacity-100 hover:bg-primaryHover'
          >
            Lihat Detail
          </button>
        )}
      </div>

      <ModalTiketAktif
        activeRef={toggleRef}
        show={isModalOpen}
        closeHandler={closeModalHandler}
        ticket={ticket}
        date={date}
      />
    </div>
  );
};

export default CardTiketAktif;
