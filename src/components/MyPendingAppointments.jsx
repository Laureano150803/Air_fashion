import React from 'react'
import axios from 'axios';
import apiUrl from '../../api';
import service from '../assets/images/service.png';
import Swal from 'sweetalert2';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';

export default function MyPendingAppointments({ close }) {
    const token = localStorage.getItem('token');
    const headers = { headers: { 'authorization': `Bearer ${token}` } };
    const [citas, setCitas] = useState([])
    const [updData, setUpdData] = useState(true)

    useEffect(() => {
        axios.get(apiUrl + 'google/client/allMyAppointments', headers).then(res => setCitas(res.data.response))
        setUpdData(false)
    }, [updData])

    async function markAsCanceled(id) {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel appointment!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.patch(apiUrl + `google/cancel/${id}`, null, headers).then(()=>setUpdData(true))
                    Swal.fire({
                        title: "Canceled!",
                        text: "The appointment has been updated.",
                        icon: "success"
                    });
                } catch (error) {
                    console.log(error);
                }
            }
        });
    }
    return (
        <div className='fixed right-2 animate-fade-down animate-duration-1000 bg-slate-100 '>
            <div className='absolute top-0 right-0  min-w-[40rem] h-auto bg-white text-black flex flex-col rounded-md'>
                <div className='w-[100%] flex justify-end'>
                    <svg onClick={() => close()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 m-1 cursor-pointer">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <div className='flex flex-col custom-scrollbar' style={{overflowY:'auto', maxHeight:'9rem'}}>
                    {citas.length === 0 && <div className='text-center h-[2rem]'>You dont have pending appointments...</div>}
                    {citas?.map(citas => (
                        <div key={citas._id} className="animate-fade-right animate-duration-[3000ms] p-8  border-t  dark:border-blue-200 flex gap-4">
                            <img src={citas?.servicio_id?.foto} className='h-16 w-16 bg-slate-50 rounded-3xl shadow-xl shadow-blue-200 ' />
                            <div className="flex flex-col  gap-2">

                                <div className="flex gap-4 ">
                                    <h1 className='aboutUs text-xl'>{`${citas.cliente_id.nombre} ${citas.cliente_id.apellido}`}  </h1>
                                    <div className=" flex ">
                                        <img src={service} className='h-7 w-7 ' />
                                        <h1 className='aboutUs text-xl'>{citas.servicio_id.nombre}</h1>
                                    </div>
                                </div>
                                <div className=" flex gap-3  dark:text-gray-400/100 text-md items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 stroke-2">
                                        <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                                    </svg>

                                    <div className="flex  gap-4 items-center divide-x-2 ">
                                        <h1>{dayjs(citas.inicio).format('MMMM/DD/HH:mm')}</h1>

                                        <div className="flex gap-2 pl-5 items-center ">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 stroke-2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <h1>{citas.status}</h1>
                                        </div>
                                        <button value={citas._id} onClick={(e) => {
                                            const id = e.currentTarget.getAttribute("value");
                                            markAsCanceled(id);
                                        }} className='flex text-red-500 font-mono text-lg hover:scale-110 duration-150'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-6 ">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                            </svg>
                                            Cancel
                                        </button>


                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}


                </div>




            </div>
        </div>
    )
}
