import ConstraintLarge from '../layout/ConstraintLarge';

const Hero = () => {
  return (
    <ConstraintLarge>
      <div
        id='controls-carousel'
        className='-z-10 relative w-full'
        data-carousel='static'
      >
        <div className='relative h-64 overflow-hidden rounded-lg md:h-96'>
          <div className='hidden duration-700 ease-in-out' data-carousel-item>
            <img
              src='/src/assets/cover-blog.jpg'
              className='absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              alt='...'
            />
          </div>
          <div
            className='hidden duration-700 ease-in-out'
            data-carousel-item='active'
          >
            <img
              src='/src/assets/cover-blog.jpg'
              className='absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              alt='...'
            />
          </div>

          <div className='hidden duration-700 ease-in-out' data-carousel-item>
            <img
              src='/src/assets/cover-all-about-final-project.jpg'
              className='absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              alt='...'
            />
          </div>
          <div className='hidden duration-700 ease-in-out' data-carousel-item>
            <img
              src='/src/assets/cover-all-about-final-project.jpg'
              className='absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              alt='...'
            />
          </div>
        </div>

        <button
          type='button'
          className='absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
          data-carousel-prev
        >
          <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
            <svg
              className='w-4 h-4 text-white dark:text-gray-800'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 6 10'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M5 1 1 5l4 4'
              />
            </svg>
            <span className='sr-only'>Previous</span>
          </span>
        </button>
        <button
          type='button'
          className='absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
          data-carousel-next
        >
          <span className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'>
            <svg
              className='w-4 h-4 text-white dark:text-gray-800'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 6 10'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='m1 9 4-4-4-4'
              />
            </svg>
            <span className='sr-only'>Next</span>
          </span>
        </button>
      </div>
    </ConstraintLarge>
  );
};

export default Hero;
