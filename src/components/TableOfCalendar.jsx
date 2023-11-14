
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../TiltComponent.css';

const TableOfCalendar = () => {
  const [date, setDate] = useState(new Date());

  const tileClassName = ({ date, view }) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return date.toISOString().split('T')[0] === today.toISOString().split('T')[0]
    ? 'bg-purple-500 text-black font-bold' 
    : null;
  };
  console.log(date)
 

  return (
    <>
      <div className="max-w-md mx-auto p-4  ">
      <Calendar
        onChange={setDate}
        value={date}
        className="flex flex-col items-center "
        tileClassName={tileClassName}
      />
    </div>
    </>
  );
};

export default TableOfCalendar;

