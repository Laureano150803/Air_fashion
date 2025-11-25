import axios from 'axios'
import React, { useRef } from 'react'
import apiUrl from '../../api'
import { useState } from 'react'
import { useEffect } from 'react'
import showSwalAlert from '../showAlert'



const ServiceCreate = ({close,update}) => {
  const [idTypeService, setidTypeService] = useState('')
  const [serviceType, setserviceType] = useState([])
  useEffect(() => {
    axios.get(apiUrl + 'types').then(res => setserviceType(res.data.Response)).catch(res => console.log(res))
  }, [])

  let nombre = useRef()
  let descripcion = useRef()
  let precio = useRef()
  let foto = useRef()



  const [newService, setnewService] = useState(true)

  function crearServicios(e) {
    e.preventDefault()
    const selectedFile = foto.current && foto.current.files && foto.current.files[0]
    if (!selectedFile) {

      console.error('No file selected');
      return;
    }
    const data = new FormData()
    data.append('nombre', nombre.current.value)
    data.append('descripcion', descripcion.current.value)
    data.append('precio', precio.current.value)
    data.append('serviceTypeId', idTypeService  )
    data.append('foto', selectedFile)



    axios.post(apiUrl + 'services/new', data)
      .then(res => {
        showSwalAlert('success', 'Service created')
        update(true)
        

      })
      .catch(res => showSwalAlert('error', 'Error creating Service'))
  }








  return (
    <>
      <div className="w-[30%] mt-5 flex flex-col gap-6 shadow-2xl animate-fade-left animate-duration-[4000ms] ">
        <div className="modal-header bg-gradient-to-r from-cyan-500 to-blue-500 py-4 rounded-xl ">
          <div className=" flex justify-between items-center">
            <h1 className="text-3xl text-white ml-4 text-css">
              Create Service
            </h1>
            <svg
              onClick={close}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 stroke-white mr-4 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        <form className="m-6" onSubmit={crearServicios}>
          <div className="relative z-0 w-full mb-6 group">
            <input
              ref={nombre}
              type="text"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Service's Name
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <select onChange={(e)=>setidTypeService(e.target.value)}>
              <option value="">
                Select the type of service
              </option>
              {serviceType.map(service=>(
                <option key={service._id} value={service._id}>
                  {service.name}
                </option>
              ))}
            </select>
          </div>


          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-6 group">
              <input
                ref={descripcion}
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Description
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                ref={precio}
                type="number"
                name="floating_first_name"
                id="floating_first_name"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Price
              </label>
            </div>
          </div>


          <div className="flex items-center justify-center w-full mb-8">
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF{" "}
                </p>
              </div>
              <input
                ref={foto}
                id="dropzone-file"
                type="file"
                className="hidden"
              />
            </label>
          </div>

          <button
            type="submit"

            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>


    </>
  )
}

export default ServiceCreate