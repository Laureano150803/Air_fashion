import axios from 'axios'
import React, { useEffect, useState } from 'react'
import apiUrl from '../../api'
import '../backgroundSlider.css';
import service from '/src/assets/images/service.png'




const Diary = () => {
    const [agenda, setagenda] = useState([])

    useEffect(() => {
        axios.get(apiUrl + 'google/pending/appointments').then(res => setagenda(res.data.Response)).catch(error => console.log(error));
    }, [])
    return (
        <>
            <div className="min-h-screen ">

                <div className="p-7  w-[70rem] sticky ">
                    <div className="flex flex-col ">
                        <div className="bg-slate-50 p-7">

                            <h1 className='aboutUs text-5xl pl-10 '>

                                Next Clients To Serve
                            </h1>

                        </div>
                        <div className="line-loader h-[2px]"></div>
                        {agenda.map((agendas) => (


                            <div key={agendas._id} className=" p-8  border-t  dark:border-blue-200 flex gap-4 ">
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

                                            <h1>{agendas.createdAt}  </h1>

                                            <div className="flex gap-2 pl-5 items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 stroke-2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>


                                                <h1>{agendas.status}</h1>


                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
                
            </div>
        </>
    )
}

export default Diary