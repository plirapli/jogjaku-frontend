const CardAktivitas = ({ name, image }) => {
  return (
    <div className='w-full px-4 py-4 flex flex-col items-center gap-4 bg-white border-[3px] border-black/20 rounded-xl'>
      <h1 className='text-center text-lg text-primary font-bold'>{name}</h1>
      <img className='w-28 h-28' src={image} alt='' />
    </div>
  );
};

export default CardAktivitas;
