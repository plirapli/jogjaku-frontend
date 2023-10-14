const ConstraintLarge = ({ children, paddingBottom = true }) => (
  <div
    className={`w-full ${
      paddingBottom ? 'pb-5' : ''
    } px-5 flex flex-col items-center`}
  >
    <div className='w-full max-w-screen-xl'>{children}</div>
  </div>
);

export default ConstraintLarge;
