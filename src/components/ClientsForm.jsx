import React, { useRef } from 'react'
import axios from 'axios'
import apiUrl from '../../api'
import showSwalAlert from '../showAlert'

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
            <div className='flex flex-col'>
                <button onClick={cerrar}>X</button>
                <form className='flex flex-col justify-center items-center h-[20rem] ' onSubmit={clientform}>
                    <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="relative z-0 w-[20rem] mb-6 group">
                            <input ref={nombre} type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-[20rem] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                        </div>

                        <div class="relative z-0 w-[20rem] mb-6 group">
                            <input ref={apellido} type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-[20rem] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                        </div>
                    </div>

                    <div class="grid md:grid-cols-2 md:gap-6">
                        <div class="relative z-0 w-[20rem] mb-6 group">
                            <input ref={telefono} type="tel" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-[20rem] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
                        </div>

                        <div class="relative z-0 w-[20rem] mb-6 group">
                            <input ref={Cedula} type="text" name="floating_company" id="floating_company" class="block py-2.5 px-0 w-[20rem] text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Cedula</label>
                        </div>
                    </div>

                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[20rem] sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </form>

            </div>




        </>
    )
}

export default ClientsForm
