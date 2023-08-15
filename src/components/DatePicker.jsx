import { useState } from 'react';
import Datepicker from 'tailwind-datepicker-react';

const getYesterday = () => {
  let date = new Date();
  let yesterday = new Date();
  yesterday.setDate(date.getDate() - 1);
  return yesterday;
};

const options = {
  title: 'Demo Title',
  autoHide: true,
  todayBtn: true,
  clearBtn: true,
  maxDate: new Date('2030-01-01'),
  minDate: new Date(getYesterday()),
  theme: {
    clearBtn: '',
    text: '',
    disabledText: 'text-black text-opacity-30',
    input: '',
    inputIcon: '',
    selected: '',
  },
  icons: {
    // () => ReactElement | JSX.Element
    prev: () => <span>Previous</span>,
    next: () => <span>Next</span>,
  },
  language: 'en',
};

const DatePicker = () => {
  const [show, setShow] = useState(false);
  const handleChange = (selectedDate) => {
    console.log(selectedDate);
  };
  const handleClose = (state) => {
    setShow(state);
  };

  return (
    <div>
      <Datepicker
        options={options}
        onChange={handleChange}
        show={show}
        setShow={handleClose}
      />
    </div>
  );
};

export default DatePicker;
