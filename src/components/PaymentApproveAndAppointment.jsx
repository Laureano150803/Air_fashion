import React, { useEffect, useState } from 'react';
import axios from 'axios';
import apiUrl from '../../api';
import { useNavigate } from 'react-router-dom';
import showSwalAlert from '../showAlert';

export default function PaymentApproveAndAppointment() {
    const token = localStorage.getItem('token');
    const headers = { headers: { 'authorization': `Bearer ${token}` } };
    const navigate = useNavigate();

    const [timer, setTimer] = useState(5); // Inicializa el temporizador en 5 segundos

    function crearCita() {
        const inicio = localStorage.getItem('inicio');
        const peluquero_id = localStorage.getItem('peluquero_id');
        const metodoPago = localStorage.getItem('metodoPago');
        const servicio_id = localStorage.getItem('servicio_id');
        const description = localStorage.getItem('description');

        const data = {
            inicio: inicio.toString(),
            peluquero_id: peluquero_id,
            metodoPago: metodoPago,
            servicio_id: servicio_id,
            description: description
        };

        axios.post(apiUrl + 'google/new/appointment', data, headers)
            .then(res => {
                console.log(res);
                showSwalAlert('success', 'Your appointment has been created');
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        crearCita();
        localStorage.removeItem('inicio');
        localStorage.removeItem('peluquero_id');
        localStorage.removeItem('metodoPago');
        localStorage.removeItem('servicio_id');
        localStorage.removeItem('description');

        // Configurar el temporizador
        const intervalId = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer === 1) {
                    // Cuando el temporizador llega a 1, realiza el navigate
                    clearInterval(intervalId); // Limpia el intervalo
                    navigate('/'); // Redirige al usuario
                    return 0; // Establece el temporizador en 0 para evitar valores negativos
                }
                return prevTimer - 1; // Decrementa el temporizador
            });
        }, 1000);

        // Limpiar el temporizador cuando se desmonta el componente
        return () => clearInterval(intervalId);
    }, [navigate]);

    return (
        <div className='min-h-[100vh] min-w-[100vw] flex justify-center items-center'>
            <div className='flex justify-center items-center bg-violet-400 h-[40%] w-[40%]'>
                <p className='text-2xl font-bold'>Your appointment is processing. Please wait for {timer} seconds.</p>

            </div>

        </div>
    );
}
