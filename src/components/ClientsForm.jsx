import React, { useRef } from 'react'
import axios from 'axios'
import apiUrl from '../../api'
import showSwalAlert from '../showAlert'
import '../backgroundSlider.css'
import '../TiltComponent.css';

const ClientsForm = ({ cerrar }) => {
    let nombre = useRef()
    let apellido = useRef()
    let telefono = useRef()
    let Cedula = useRef()

    async function clientform(e) {
        e.preventDefault()
        const data = {
            nombre: nombre.current.value,
            apellido: apellido.current.value,
            telefono: telefono.current.value,
            cedula: Cedula.current.value

        }
        const token = localStorage.getItem("token");
        const headers = { headers: { 'authorization': `Bearer ${token}` } };

        axios.post(apiUrl + 'clients/new', data, headers)
            .then(res => {
                showSwalAlert('success', 'Sign Up Successfully!')
            }).catch(err => showSwalAlert('error', err.response.data.Response))
    }

    return (
        <>
            <div className=' flex flex-col'>


                <div className="flex justify-between items-center bg-gradient-to-r from-cyan-500 to-blue-500 p-5 rounded-xl">
                    <h1 className='text-3xl text-white text-css'>Become one of our clients</h1>
                    <button onClick={cerrar}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 stroke-white mr-4 cursor-pointer" >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>

                    </button>
                </div>
                <form className='' onSubmit={clientform}>
                    <div className="container4  flex flex-col justify-center items-center h-[20rem] gap-5  m-10">

                        <div className='borderLine4 flex justify-center items-center'></div>

                        <div class="flex items-center justify-center gap-10">

                            <div class="relative z-10 w-[15rem] group">
                                <input ref={nombre} type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-[15rem] text-xl t bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white dark:focus:border-y-slate-50 focus:outline-none focus:ring-0 focus:border-y-slate-50 peer" placeholder=" " required />
                                <label for="floating_first_name" class="peer-focus:font-medium absolute text-xl text-slate-50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-50  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                            </div>

                            <div class="relative z-10 w-[15rem] group">
                                <input ref={apellido} type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-[15rem] text-xl  bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white dark:focus:border-y-slate-50 focus:outline-none focus:ring-0 focus:border-y-slate-50 peer" placeholder=" " required />
                                <label for="floating_last_name" class="peer-focus:font-medium absolute text-xl text-slate-50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-50  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                            </div>
                        </div>

                        <div class="flex justify-evenly items-center gap-10">
                            <div class="relative z-10 w-[15rem] mb-6 group">
                                <input ref={telefono} type="tel" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-[15rem] text-xl  bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white dark:focus:border-y-slate-50 focus:outline-none focus:ring-0 focus:border-y-slate-50 peer" placeholder=" " required />
                                <label for="floating_phone" class="peer-focus:font-medium absolute text-xl text-slate-50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-50  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
                            </div>

                            <div class="relative z-10 w-[15rem] mb-6 group">
                                <input ref={Cedula} type="text" name="floating_company" id="floating_company" class="block py-2.5 px-0 w-[15rem] text-xl  bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white dark:focus:border-y-slate-50 focus:outline-none focus:ring-0 focus:border-y-slate-50 peer" placeholder=" " required />
                                <label for="floating_company" class="peer-focus:font-medium absolute text-xl text-slate-50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-50  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Cedula</label>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">

                    <button type="submit" className='container3 z-10 text-xl  text-white bg-transparent p-4'>
                        <span></span>
                        <div className='borderLine4 flex justify-center items-center'></div>
                        <h1 className='z-10 text-css'>

                        Submit
                        </h1>
                    </button>
                    </div>
                </form>

            </div>



        </>
    )
}

export default ClientsForm
