import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import apiUrl from '../../api'
import { UpdateHairdresser } from './UpdateHairdresser';
import Swal from 'sweetalert2';
import '../backgroundSlider.css';
import showSwalAlert from '../showAlert';


const ListHairdresser = () => {
    const token = localStorage.getItem("token");
    const headers = { headers: { 'authorization': `Bearer ${token}` } };

    const [idvalue, setidvalue] = useState('');
    const [isOpen, setisOpen] = useState(false);
    const [openUpd, setOpenUpd] = useState(false)
    const [updateData, setUpdateData] = useState(true);
    const openModal = () => {



        setisOpen(true);
    }

    const closeModal = () => {
        setisOpen(false);
    }



    let email = useRef()
    let contaseña = useRef()
    let nombre = useRef()
    let apellido = useRef()
    let telefono = useRef()
    let cedula = useRef()
    let foto = useRef()

    function asignaremail(e) {
        e.preventDefault()
        const data = {
            email: email.current.value,
            password: contaseña.current.value

        }

        axios.post(apiUrl + 'users/signup', data).then(() => {
            crearPeluquero()
        }).catch(res => console.log(res))

    }
    function crearPeluquero(e) {
        if (e) {
            e.preventDefault()
        }

        const selectedFile = foto.current && foto.current.files && foto.current.files[0]
        if (!selectedFile) {
            // Handle the case where no file is selected
            console.error('No file selected');
            return;
        }
        const data = new FormData()
        data.append('email', email.current.value)
        data.append('nombre', nombre.current.value)
        data.append('apellido', apellido.current.value)
        data.append('telefono', telefono.current.value)
        data.append('foto', selectedFile)
        data.append('cedula', cedula.current.value)



        axios.post(apiUrl + 'peluqueros/new', data, headers).then(res => {
            showSwalAlert('success', 'Hairdresser created')
            setUpdateData(true)
        })
            .catch(res => showSwalAlert('error', 'Error creating Hairdresser'))

           
    }
    async function deleteHairdresser(id){
        const Id= id
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                const token = localStorage.getItem("token");
                const headers = { headers: { 'authorization': `Bearer ${token}` } };
                axios.delete(apiUrl + `peluqueros/${Id}`, headers)  // Corregir la URL aquí
                    .then(res => {
                        setUpdateData(true);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    })
                    .catch(error => {
                        console.log(error);
                    });
            }
        });
    };


    const [peluqueros, setpeluqueros] = useState([])
    useEffect(() => {
        // Obtener la lista de peluqueros solo cuando updateData sea true
        const fetchData = async () => {
            try {
                const response = await axios.get(apiUrl + 'peluqueros');
                setpeluqueros(response.data.Response);
            } catch (error) {
                console.error(error);
            } finally {
                // Después de obtener los datos, establecer updateData en false
                setUpdateData(false);
            }
        };

        if (updateData) {
            fetchData();
        }
    }, [updateData]);

    function checkAndOpenModalcreate() {
        if (openUpd) {
            closeUpdModal()
            openModal()
        }
        openModal()
    }
    function checkAndOpenModalUpd() {
        if (isOpen) {
            closeModal()
            openUpdModal()
        }
        openUpdModal()
    }
    function openUpdModal() {
        setOpenUpd(true)
    }
    function closeUpdModal() {
        setOpenUpd(false)
    }

    const [filter, setfilter] = useState('')

    const filteredPeluqueros = peluqueros.filter((peluquero) => {
        const searchValue = filter.toLowerCase();
        return (
            peluquero.nombre.toLowerCase().includes(searchValue) ||
            (peluquero.user_id?.email.toLowerCase().includes(searchValue)) ||
            peluquero.apellido.toLowerCase().includes(searchValue) ||
            peluquero.cedula.toLowerCase().includes(searchValue) ||
            peluquero.telefono.toLowerCase().includes(searchValue)
        );
    });

    const handleInputChange = (e) => {
        setfilter(e.target.value);
    };





    return (
        <>
            <div className="w-full h-[100vh]  ">
                <div className="flex justify-evenly items-center min-h-screen ">

                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-[55%] rounded-xl">
                        <div className="flex items-center justify-around py-4 bg-gradient-to-r from-cyan-500 to-blue-500  ">

                            <button onClick={checkAndOpenModalcreate} className="flex justify-center  items-center gap-x-2 transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 w-60 p-2 rounded-lg hover:text-white ">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h1 className='text-base uppercase'>Add new Hair Dresser</h1>

                            </button>


                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                    </svg>
                                </div>
                                <input onChange={handleInputChange} value={filter} type="text" id="table-search-users" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users" />
                            </div>
                        </div>

                        <table className="w-full text-sm text-left dark:text-gray-400 ">

                            <thead className="text-base  uppercase bg-gray-100  dark:text-violet-600">
                                <tr>

                                    <th scope="col" className="px-6 py-3">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        ID
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        phone
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>

                                {filteredPeluqueros.length > 0 ? (


                                    filteredPeluqueros.map((peluquero) => (
                                        <>
                                            <tr key={peluquero._id} className="bg-white border-t  dark:border-blue-200 hover:text-white dark:hover:bg-gradient-to-r from-cyan-500 to-blue-500 ">


                                                <th scope="row" className="flex hover:text-white items-center px-6 py-4 font-medium  dark:text-black">
                                                    <img className="w-10 h-10 rounded-full" src={peluquero.foto} />
                                                    <div className="pl-3 ">
                                                        <div className="text-base font-semibold">{`${peluquero.nombre} ${peluquero.apellido}`}</div>
                                                        <div className="font-medium text-sm ">{peluquero?.user_id?.email}</div>
                                                    </div>
                                                </th>
                                                <td className="px-6 py-4">
                                                    {peluquero.cedula}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {peluquero.telefono}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex gap-x-4 items-center ">
                                                        <svg
                                                            value={peluquero._id}
                                                            onClick={(e) => {
                                                                const id = e.currentTarget.getAttribute("value");
                                                                setidvalue(id);
                                                                checkAndOpenModalUpd()
                                                            }}
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke-width="1.5"
                                                            stroke="currentColor"
                                                            className="w-6 h-6 stroke-purple-600 cursor-pointer"
                                                        >
                                                            <path
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                                            />
                                                        </svg>



                                                        <svg
                                                            value={peluquero._id}
                                                            onClick={async(e) => {
                                                                const id = e.currentTarget.getAttribute("value");
                                                                deleteHairdresser(id)
                                                            }}
                                                            
                                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 stroke-red-600 cursor-pointer ">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                        </svg>
                                                    </div>
                                                </td>
                                            </tr>
                                        </>
                                    ))
                                )
                                    :
                                    (
                                        peluqueros?.map((peluquero) => (

                                            <tr key={peluquero._id} className="bg-white border-t  dark:border-blue-200 hover:text-white dark:hover:bg-gradient-to-r from-cyan-500 to-blue-500 ">


                                                <th scope="row" className="flex hover:text-white items-center px-6 py-4 font-medium  dark:text-black">
                                                    <img className="w-10 h-10 rounded-full" src={peluquero.foto} />
                                                    <div className="pl-3 ">
                                                        <div className="text-base font-semibold">{`${peluquero.nombre} ${peluquero.apellido}`}</div>
                                                        <div className="font-medium text-sm ">{peluquero?.user_id?.email}</div>
                                                    </div>
                                                </th>
                                                <td className="px-6 py-4">
                                                    {peluquero.cedula}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {peluquero.telefono}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <div className="flex gap-x-4 items-center ">
                                                        <svg
                                                            value={peluquero._id}
                                                            onClick={(e) => {
                                                                const id = e.currentTarget.getAttribute("value");
                                                                setidvalue(id);
                                                                checkAndOpenModalUpd()
                                                            }}
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                            stroke-width="1.5"
                                                            stroke="currentColor"
                                                            className="w-6 h-6 stroke-purple-600 cursor-pointer"
                                                        >
                                                            <path
                                                                stroke-linecap="round"
                                                                stroke-linejoin="round"
                                                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                                            />
                                                        </svg>



                                                        <svg
                                                            value={peluquero._id}
                                                            onClick={(e) => {
                                                                const id = e.currentTarget.getAttribute("value");
                                                                setidvalue(id)
                                                            }}
                                                            onDoubleClick={deleteHairdresser}
                                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 stroke-red-600 cursor-pointer ">
                                                            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                                        </svg>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))

                                    )}


                            </tbody>
                        </table>

                    </div>

                    {isOpen && (
                        <div className="w-[35%] mt-5 flex flex-col gap-6 shadow-2xl animate-fade-left animate-duration-[4000ms] ">
                            <div className="modal-header bg-gradient-to-r from-cyan-500 to-blue-500 py-4 rounded-xl ">
                                <div className=" flex justify-between items-center">
                                    <h1 className='text-3xl text-white ml-4 text-css'> Create New HairDresser</h1>
                                    <svg onClick={closeModal} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 stroke-white mr-4 cursor-pointer" >
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>

                                </div>
                            </div>

                            <form onSubmit={asignaremail} className='m-6'>
                                <div className="relative z-0 w-full mb-6 group" >
                                    <input ref={email} type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label for="floating_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input ref={contaseña} type="password" name="floating_password" id="floating_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label for="floating_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                                </div>
                                <div className="relative z-0 w-full mb-6 group">
                                    <input ref={contaseña} type="password" name="repeat_password" id="floating_repeat_password" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                    <label for="floating_repeat_password" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
                                </div>
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input ref={nombre} type="text" name="floating_first_name" id="floating_first_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label for="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
                                    </div>
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input ref={apellido} type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                                    </div>
                                </div>
                                <div className="grid md:grid-cols-2 md:gap-6">
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input ref={telefono} type="tel" name="floating_phone" id="floating_phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label for="floating_phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
                                    </div>
                                    <div className="relative z-0 w-full mb-6 group">
                                        <input ref={cedula} type="text" name="floating_company" id="floating_company" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                                        <label for="floating_company" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">ID</label>
                                    </div>
                                </div>


                                <div className="flex items-center justify-center w-full mb-8">
                                    <label  for="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100">
                                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                            </svg>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                        </div>
                                        <input ref={foto} id="dropzone-file" type="file" className="hidden" />
                                    </label>
                                </div>

                                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                            </form>

                        </div>
                    )}
                    {openUpd && <UpdateHairdresser close={closeUpdModal} id={idvalue} reload={setUpdateData} />}

                </div>

            </div>
        </>
    )
}

export default ListHairdresser