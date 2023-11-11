import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import axios from 'axios';
import apiUrl from '../../api';
import dayjs from 'dayjs';


export default function BuyBtn({ servicename, price, idPelu, metododepago, servicioId, hora }) {



    initMercadoPago(import.meta.env.VITE_PUBLIC_KEY);
    const token = localStorage.getItem('token');
    const headers = { headers: { 'authorization': `Bearer ${token}` } };

    const [preferenceId, setPreferenceId] = useState(null);




    //crear cita a partir de un pago
    const currentYear = dayjs().year();
    const currentMonth = dayjs().month() + 1;
    const currentDay = dayjs().date();

    const cita = {
        inicio: dayjs(`${currentYear}-${currentMonth}-${currentDay}T${hora}:00`).format('YYYY-MM-DDTHH:mm:ss').toString(),
        peluquero_id: idPelu,
        metodoPago: metododepago,
        servicio_id: servicioId,
        description: servicename
    }


    const createPreference = async (e) => {
        e.preventDefault
        let data = {
            nombre: servicename,
            unit_price: parseInt(price),
            cita: cita
        }
        localStorage.setItem('inicio', cita.inicio)
        localStorage.setItem('peluquero_id', cita.peluquero_id)
        localStorage.setItem('metodoPago', cita.metodoPago)
        localStorage.setItem('servicio_id', cita.servicio_id)
        localStorage.setItem('description', cita.description)
        try {
            await axios.post(apiUrl + 'payment', data, headers)
                .then(response => {
                    setPreferenceId(response.data.preferenceId)
                    console.log(response)
                }).catch(res => console.log(res))

        } catch (error) {
            console.log(error);
        }
    }
    return (

        <>
            {!preferenceId && (
                <button
                    className="makeAppoiment"
                    onClick={createPreference}
                >
                    PROCESS TO PAY
                </button>
            )}
            <div>
                {preferenceId && <Wallet initialization={{ preferenceId }} />}
            </div>
        </>





    )
}
