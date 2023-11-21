import React from 'react'
import dayjs from 'dayjs';
import axios from 'axios';
import apiUrl from '../../api.js';
import { useState, useEffect } from 'react';
import { headers } from '../headers.js';

export default function AppointmentsTable() {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
      axios.get(apiUrl + 'google/pending/appointments', headers)
        .then(res => {
          setAppointments(res.data.Response);
        })
        .catch(res => {
          setAppointments([]);
        });
    }, []);
    return (
        <table className='border'>
            <thead>
                <tr>
                    <th className='border'>Persona</th>
                    <th className='border'>Hora de Inicio</th>
                    <th className='border'>Hora de Fin</th>
                    <th className='border'>Fecha DIA/MES</th>
                </tr>
            </thead>
            <tbody>
                {appointments?.map(appointment => (
                    <tr key={appointment._id}>
                        <td className='border'>{appointment.cliente_id.nombre}</td>
                        <td className='border'>{dayjs(appointment.inicio).format('HH:mm')}</td>
                        <td className='border'>{dayjs(appointment.fin).format('HH:mm')}</td>
                        <td className='border'>{dayjs(appointment.fin).format('MM-DD')}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
