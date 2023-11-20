import axios from 'axios'
import React, { useEffect, useState } from 'react'
import apiUrl from '../../api'
import '../backgroundSlider.css';
import showSwalAlert from '../showAlert.js';
import { useNavigate } from 'react-router-dom';

import barber from '/src/assets/images/barber-man.jpg';
import service from '/src/assets/images/service.png';
import TableOfCalendar from './TableOfCalendar';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';




const Diary = () => {
    const [agenda, setagenda] = useState([])

    useEffect(() => {
        axios.get(apiUrl + 'google/pending/appointments').then(res => setagenda(res.data.Response)).catch(error => console.log(error));
    }, [])
    const token = localStorage.getItem('token');
    const headers = { headers: { 'authorization': `Bearer ${token}` } };
    const navigate = useNavigate();
    const role = localStorage.getItem('role');
    function confirmAccount() {
        axios
            .get(apiUrl + 'google', headers)
            .then((res) => {
                showSwalAlert('success', 'Choose your appointment!');
                let url = res.data.redirect;

                // Abre una nueva ventana emergente con la URL
                window.open(url, 'popupWindow', 'width=600, height=800, scrollbars=yes');
            })
            .then(navigate('/appointment/new'))
            .catch((error) => {
                showSwalAlert('error', 'Something went wrong');
                navigate('/'); // Navega a la ruta '/appointment' en la misma ventana.
            });
    }


    return (
        <>
            <div className="min-h-screen ">
                <div className=" flex items-center justify-evenly">
                    <div className="p-7  w-[65rem]  rounded-xl ">
                        <div className="flex flex-col shadow-md rounded-lg  h-[50rem] ">
                            <div className="bg-gradient-to-r from-sky-400 to-cyan-300 rounded-xl p-7  top-0 z-10">

                                <h1 className='aboutUs text-5xl pl-10 text-white'>

                                    Next Clients To Serve
                                </h1>

                            </div>
                            <div className="custom-scrollbar">


                                {agenda.map((agendas) => (


                                    <div key={agendas._id} className=" p-8  border-t  border-blue-200 flex gap-4 ">
                                        <img src={agendas.servicio_id.foto} className='h-16 w-16 bg-slate-50 rounded-3xl shadow-xl shadow-blue-200 ' />
                                        <div className="flex flex-col gap-2">

                                            <div className="flex gap-4 ">
                                                <h1 className='aboutUs text-xl'>{`${agendas.cliente_id.nombre} ${agendas.cliente_id.apellido}`}  </h1>
                                                <div className=" flex ">
                                                    <img src={service} className='h-7 w-7 ' />
                                                    <h1 className='aboutUs text-xl'>{agendas.servicio_id.nombre}</h1>
                                                </div>
                                            </div>
                                            <div className=" flex gap-3 dark:text-gray-400/100 text-lg items-center ">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 stroke-2">
                                                    <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                                                </svg>
                                                <div className="flex gap-4 items-center divide-x-2 ">


                                                    <h1>{dayjs(agendas.inicio).format('MMMM/DD/HH:mm')}</h1>

                                                    <div className="flex gap-2 pl-5 items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 stroke-2">
                                                            <path strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        </svg>



                                                        <h1>{agendas.status} WITH {agendas.peluquero_id.nombre.toUpperCase()} {agendas.peluquero_id.apellido.toUpperCase()}</h1>


                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className=" w-[30rem] flex flex-col justify-center text-white items-center h-[100vh] bg-cover" style={{ backgroundImage: `url('${barber}')` }}>
                        <div className="">

                            <TableOfCalendar />
                        </div>
                        <div onClick={confirmAccount}>
                            <Link className='container3 '>
                                <span></span>
                                <div className='borderLine3 flex justify-center items-center'></div>
                                <button className='flex gap-3 z-10 font-semibold'>

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                        <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                                        <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                                    </svg>
                                    Make your first reservation
                                </button>
                            </Link>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Diary