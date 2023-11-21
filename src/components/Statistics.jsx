import React, { useEffect, useState } from 'react';
import axios from 'axios';
import apiUrl from '../../api';

export default function Statistics() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios.get(apiUrl + 'google/done/appointments')
      .then(res => setAppointments(res.data.Response))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='min-h-screen min-w-full'>
      
    </div>
  );
}
