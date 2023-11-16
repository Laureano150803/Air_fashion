import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../TiltComponent.css';

const TableOfCalendar = ({ onDateChange }) => {
  const [date, setDate] = useState(new Date());

  const tileClassName = ({ date, view }) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return date.toISOString().split('T')[0] === today.toISOString().split('T')[0]
      ? 'bg-purple-500 text-black font-bold'
      : null;
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
    // Solo llama a la funciÃ³n proporcionada por el padre si se proporciona
    onDateChange && onDateChange(newDate);
  };

  console.log(date);

  return (
    <>
      <div className="max-w-md mx-auto p-4 ">
        <Calendar
          onChange={handleDateChange}
          value={date}
          className="flex flex-col items-center"
          tileClassName={tileClassName}
          next2Label=''
          prev2Label=''
        />
      </div>
    </>
  );
};

export default TableOfCalendar;