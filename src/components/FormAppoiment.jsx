import React, { useState, useEffect } from 'react';
import axios from 'axios';
import apiUrl from '../../api';
import dayjs from 'dayjs';

export default function FormAppointment() {
  const token = localStorage.getItem('token');
  const headers = { headers: { 'authorization': `Bearer ${token}` } };
  const [idPeluquero, setIdPeluquero] = useState('');
  const [selectedHour, setSelectedHour] = useState('');
  const [peluquerosDisponibles, setPeluquerosDisponibles] = useState([]);
  const [hasSelectedHour, setHasSelectedHour] = useState(false);
  const [services, setServices] = useState([]);
  const [idService, setIdService] = useState('');
  const [nameService, setNameService] = useState('');

  // Servicios seleccionados para renderizarlos en la carta
  const [selectedServiceImage, setSelectedServiceImage] = useState(null);
  const [selectedServicePrice, setSelectedServicePrice] = useState('');
  const [selectedServiceDescription, setSelectedServiceDescription] = useState('');

  // Peluqueros seleccionados para renderizar en la carta
  const [selectedHairdresserImage, setSelectedHairdresserImage] = useState(null);
  const [selectedHairdresserName, setSelectedHairdresserName] = useState('');
  const [selectedHairdresserLastName, setSelectedHairdresserLastName] = useState('');
  const [selectedHairdresserEmail, setSelectedHairdresserEmail] = useState('');


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
    '19:00',
    '20:00',
    '21:00',
    '22:00',
    '23:00',
    '24:00'
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
      description: nameService
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
    axios.get(apiUrl + 'services').then(res => setServices(res.data.Response)).catch(res => console.log(res))
  }, [])

  useEffect(() => {
    getPeluquerosDisponibles();
  }, [selectedHour, hasSelectedHour]);


  return (
    <div className='min-h-screen flex justify-evenly'>

      <div className='flex items-center'>
        {selectedServiceImage != null && (
          <div className='flex flex-col items-center w-[25rem] h-auto animate-fade-right'>
            <div className="flex flex-wrap shadow-md shadow-blue-400/40 rounded-xl min-h-[25rem]">
              <img src={selectedServiceImage} className='h-24 w-24' />
              <div className="flex flex-col items-center gap-6">
                <h1 className='aboutUs text-2xl '>{nameService}</h1>
                <div className="line-loader w-48 h-1"></div>
                <p className='aboutUs text-xl'>$:{selectedServicePrice}</p>
                <div className="flex flex-col aboutUs w-72">
                  <p className='text-lg'>{selectedServiceDescription}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {selectedHairdresserImage && (
          <div className='flex  flex-col items-center w-[25rem] h-auto animate-fade-right'>
            <div className="flex flex-col flex-wrap shadow-md shadow-blue-400/40 rounded-xl min-h-[25rem]">
              <div style={{ backgroundImage: `url('${selectedHairdresserImage}')` }} className='h-[20rem] w-[20rem] bg-no-repeat bg-cover bg-center rounded-t-xl'>

              </div>
              <div className="flex flex-col items-center justify-between">
                <h1 className='aboutUs text-2xl '>{selectedHairdresserName} {selectedHairdresserLastName}</h1>
                <p className='aboutUs text-xl'>{selectedHairdresserEmail}</p>
              </div>
            </div>
          </div>
        )}
        <div className='flex items-center'>
          <form onSubmit={handleAppointment} className='shadow-md shadow-blue-400/40 rounded-xl flex justify-evenly flex-col  min-h-[25rem] '>
            <select
              className='rounded-md text-center font-serif text-css-h1 focus:outline-none focus:ring focus:border-blue-300'
              onChange={(e) => {
                const selectedOption = e.target.options[e.target.selectedIndex];
                setIdService(selectedOption.value);
                setNameService(selectedOption.text);
                setSelectedServiceImage(selectedOption.dataset.image);
                setSelectedServicePrice(selectedOption.dataset.price);
                setSelectedServiceDescription(selectedOption.dataset.description);
                console.log(selectedOption)
              }}
            >
              <option value="">Choose the service</option>
              {services.map((service) => (
                <option
                  key={service._id}
                  value={service._id}
                  data-image={service.foto}
                  data-price={service.precio}
                  data-description={service.descripcion}
                >
                  {service.nombre}
                </option>
              ))}
            </select>
            <select className='rounded-md text-center font-serif text-css-h1 focus:outline-none focus:ring focus:border-blue-300' value={selectedHour} onChange={(e) => {
              setSelectedHour(e.target.value);
              setHasSelectedHour(e.target.value !== '');
            }}>
              <option value=''>Select the start time</option>
              {availableHours.map((hour, index) => (
                <option key={index} value={hour}>
                  {hour}
                </option>
              ))}
            </select>
            <select
              className='rounded-md text-center font-serif text-css-h1 focus:outline-none focus:ring focus:border-blue-300'
              onChange={(e) => {
                const selectedOption = e.target.options[e.target.selectedIndex];
                setSelectedHairdresserImage(selectedOption.dataset.image);
                setSelectedHairdresserName(selectedOption.dataset.nombre);
                setSelectedHairdresserLastName(selectedOption.dataset.apellido);
                setSelectedHairdresserEmail(selectedOption.dataset.email);
                setIdPeluquero(e.target.value);
              }}
            >
              <option>Select a hairdresser</option>
              {peluquerosDisponibles.map((peluquero) => (
                <option
                  value={peluquero._id}
                  key={peluquero._id}
                  data-image={peluquero.foto}
                  data-nombre={peluquero.nombre}
                  data-apellido={peluquero.apellido}
                  data-email={peluquero.user_id.email} // Accede al email del peluquero
                >
                  {peluquero.nombre} {peluquero.apellido}
                </option>
              ))}
            </select>

            <button type='submit' className='makeAppoiment cursor-pointer rounded-xl'>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Make my appointment
            </button>
          </form>
        </div>
      </div>


    </div>
  );
}
