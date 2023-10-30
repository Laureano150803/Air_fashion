import React, { useState, useEffect } from 'react';
import axios from 'axios';
import apiUrl from '../../api';
import dayjs from 'dayjs';

export default function FormAppoiment({ state }) {
    const token = localStorage.getItem('token');
    const headers = { headers: { 'authorization': `Bearer ${token}` } };

    const [idPeluquero, setIdPeluquero] = useState('');
    const [peluqueros, setPeluqueros] = useState([]);
    const [selectedHour, setSelectedHour] = useState('');

    // Define el array de horas disponibles
    const hoursArray = [
        '08:00-09:00',
        '09:00-10:00',
        '10:00-11:00',
        '11:00-12:00',
        '12:00-13:00',
        '13:00-14:00',
        '14:00-15:00',
        '15:00-16:00',
        '16:00-17:00',
        '17:00-18:00',
        '18:00-19:00',
        '19:00-20:00'
    ];

    // Filtra las horas disponibles
    const currentHour = dayjs().hour();
    const currentMinute = dayjs().minute();
    const currentTime = `${currentHour.toString().padStart(2, '0')}:${currentMinute.toString().padStart(2, '0')}`;
    const availableHours = hoursArray.filter(timeRange => {
        const [start] = timeRange.split('-');
        return start > currentTime;
    });

    useEffect(() => {
        axios.get(apiUrl + 'peluqueros', headers)
            .then(res => setPeluqueros(res.data.Response))
            .catch(res => console.log(res))
    }, []);

    function handleAppointment(e) {
        e.preventDefault();
        const [startHour, endHour] = selectedHour.split('-');

        const currentYear = dayjs().year();
        const currentMonth = dayjs().month() + 1;
        const currentDay = dayjs().date();

        const data = {
            inicio: dayjs(`${currentYear}-${currentMonth}-${currentDay}T${startHour}:00`).format('YYYY-MM-DDTHH:mm:ss').toString(),
            fin: dayjs(`${currentYear}-${currentMonth}-${currentDay}T${endHour}:00`).format('YYYY-MM-DDTHH:mm:ss').toString(),
            peluquero_id: idPeluquero
        };

        axios.post(apiUrl + 'google/new/appointment', data, headers)
            .then(res => console.log(res))
            .catch(res => console.log(res));
    }

    return (
        <div className='animate-fade-left animate-once fixed top-0 right-0 w-[20%]  h-full bg-teal-400  z-50 rounded-l-xl overflow-y-auto'>
            <div onClick={state} className='text-end cursor-pointer'>
                X
            </div>
            <div className='flex justify-center'>
                <form onSubmit={handleAppointment} className='flex flex-col'>
                    <select onChange={(e) => setSelectedHour(e.target.value)}>
                        <option value=''>Selecciona la hora de inicio</option>
                        {availableHours.map((hour, index) => (
                            <option key={index} value={hour}>
                                {hour}
                            </option>
                        ))}
                    </select>
                    <select onChange={(e) => setIdPeluquero(e.target.value)}>
                        <option>Selecciona un peluquero</option>
                        {peluqueros.map((peluquero) => (
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
