import React from 'react'
import dayjs from 'dayjs';

export default function AppointmentsTable({appointments}) {
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
                {appointments.map(appointment => (
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
