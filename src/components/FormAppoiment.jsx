import React, { useState, useEffect } from 'react';
import axios from 'axios';
import apiUrl from '../../api';
import dayjs from 'dayjs';
import {headers} from '../headers';
export default function FormAppointment() {
  const [idPeluquero, setIdPeluquero] = useState('');
  const [selectedHour, setSelectedHour] = useState('');
  const [peluquerosDisponibles, setPeluquerosDisponibles] = useState([]);
  const [hasSelectedHour, setHasSelectedHour] = useState(false);
  const [services, setServices]=useState([])
  const [idService, setIdService]=useState('')
  const [nameService, setNameService]=useState('')

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
      peluquero_id: idPeluquero,
      servicio_id: idService,
      description:nameService
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
  useEffect(()=>{
    axios.get(apiUrl + 'services').then(res=>setServices(res.data.Response)).catch(res=>console.log(res))
  },[])

  useEffect(() => {
    getPeluquerosDisponibles();
  }, [selectedHour, hasSelectedHour]); // Actualiza el efecto para observar 'hasSelectedHour' y 'selectedHour'

  
  return (
    <div className=' bg-teal-400  z-50 rounded-l-xl overflow-y-auto'>
      <div className='flex justify-center'>
        <form onSubmit={handleAppointment} className='flex flex-col'>

          <select onChange={(e)=>{
            const selectedOption = e.target.options[e.target.selectedIndex]
            setIdService(selectedOption.value)
            setNameService(selectedOption.text)
            }}>
            <option value="">Seleccione el servicio</option>
            {services.map(service=>(
              <option key={service._id} value={service._id}>{service.nombre}</option>
            ))}
          </select>


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
