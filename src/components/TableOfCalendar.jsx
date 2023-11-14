import React from 'react'
import { useState } from 'react';
import Calendar from 'react-calendar';


const TableOfCalendar = () => {
    const fecha = new Date()
    const [date, setdate] = useState(fecha);
  
    const onChange = (newDate) => {
      setdate(newDate)
    }
    return (
      <>
        <div>
          <Calendar onChange={onChange} value={date} CalendarType='COL' />
        </div>
      </>
    )
}

export default TableOfCalendar