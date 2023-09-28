import { Icon } from '@iconify/react';
import { useEffect, useRef, useState } from 'react';
import { CardEventKalender } from '../../components/card';
import { getAllEventsCalendar } from '../../utils/event';

const EventCalendar = () => {
  const calendarRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getAllEventsCalendar()
      .then(setEvents)
      .catch(({ data }) => {
        console.log(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const onClickScroll = (isScrollLeft) => {
    const cardWidth = calendarRef.current.firstChild.scrollWidth + 18;
    const scrollOffset = isScrollLeft ? -1 * cardWidth : cardWidth;
    calendarRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div className='flex gap-3 items-center'>
      <div
        onClick={() => onClickScroll(true)}
        className={`p-1.5 border-2 
            border-primary text-primary rounded 
            transition-all hover:bg-primary hover:text-white 
            cursor-pointer`}
      >
        <Icon icon='fluent:chevron-left-16-filled' width='24' />
      </div>
      <div className='carousel w-full space-x-4' ref={calendarRef}>
        {events.map((monthEvent) => (
          <CardEventKalender
            monthEvent={monthEvent}
            key={Object.keys(monthEvent)[0]}
          />
        ))}
      </div>
      <div
        onClick={() => onClickScroll(false)}
        className={`p-1.5 border-2 
          border-primary text-primary rounded 
          transition-all hover:bg-primary hover:text-white 
          cursor-pointer`}
      >
        <Icon icon='fluent:chevron-right-16-filled' width='24' />
      </div>
    </div>
  );
};

export default EventCalendar;
