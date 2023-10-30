import React, { useState, useEffect } from 'react';
import axios from 'axios';
import apiUrl from '../../api';
import dayjs from 'dayjs';

export default function FormAppointment({ state }) {
  const token = localStorage.getItem('token');
  const headers = { headers: { 'authorization': `Bearer ${token}` } };

  const [idPeluquero, setIdPeluquero] = useState('');
  const [selectedHour, setSelectedHour] = useState('');
  const [peluquerosDisponibles, setPeluquerosDisponibles] = useState([]);
  const [hasSelectedHour, setHasSelectedHour] = useState(false); // Nuevo estado

  const currentHour = dayjs().hour();
  const currentMinute = dayjs().minute();
  const currentTime = `${currentHour.toString().padStart(2, '0')}:${currentMinute.toString().padStart(2, '0')}`;
  
  const hoursArray = [
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00'
  ];

  const availableHours = hoursArray.filter(time => time > currentTime);

  function handleAppointment(e) {
    e.preventDefault();
    if (selectedHour === '' || idPeluquero === '') {
      alert('Selecciona una hora de inicio y un peluquero.');
      return;
    }

    const currentYear = dayjs().year();
    const currentMonth = dayjs().month() + 1;
    const currentDay = dayjs().date();

    const data = {
      inicio: dayjs(`${currentYear}-${currentMonth}-${currentDay}T${selectedHour}:00`).format('YYYY-MM-DDTHH:mm:ss').toString(),
      peluquero_id: idPeluquero
    };

    axios.post(apiUrl + 'google/new/appointment', data, headers)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  }

  // Función para cargar peluqueros disponibles
  async function getPeluquerosDisponibles() {
    if (!hasSelectedHour) {
      return;
    }

    const currentYear = dayjs().year();
    const currentMonth = dayjs().month() + 1;
    const currentDay = dayjs().date();

    try {
      const inicio = dayjs(`${currentYear}-${currentMonth}-${currentDay}T${selectedHour}:00`).format('YYYY-MM-DDTHH:mm:ss').toString()
      await axios.get(apiUrl + `peluqueros/${inicio}`).then(res => setPeluquerosDisponibles(res.data.Response)).catch(res => console.log(res));
    } catch (error) {
      console.error('Error al obtener peluqueros disponibles', error);
    }
  }

  useEffect(() => {
    getPeluquerosDisponibles();
  }, [selectedHour, hasSelectedHour]); // Actualiza el efecto para observar 'hasSelectedHour' y 'selectedHour'

  return (
    <div className='animate-fade-left animate-once fixed top-0 right-0 w-[20%]  h-full bg-teal-400  z-50 rounded-l-xl overflow-y-auto'>
      <div onClick={state} className='text-end cursor-pointer'>
        X
      </div>
      <div className='flex justify-center'>
        <form onSubmit={handleAppointment} className='flex flex-col'>
          <select value={selectedHour} onChange={(e) => {
            setSelectedHour(e.target.value);
            setHasSelectedHour(e.target.value !== ''); // Actualiza hasSelectedHour
          }}>
            <option value=''>Selecciona la hora de inicio</option>
            {availableHours.map((hour, index) => (
              <option key={index} value={hour}>
                {hour}
              </option>
            ))}
          </select>
          <select onChange={(e) => setIdPeluquero(e.target.value)}>
            <option>Selecciona un peluquero</option>
            {peluquerosDisponibles.map((peluquero) => (
              <option value={peluquero._id} key={peluquero._id}>
                {peluquero.nombre}
              </option>
            ))}
          </select>
          <input type='submit' value='Enviar' />
        </form>
      </div>
    </div>
  );
}
