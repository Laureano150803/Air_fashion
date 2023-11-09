import axios from 'axios'
import React, { useEffect, useState } from 'react'
import apiUrl from '../../api'
// import { show_alerta } from '../functions'

const CrudService = () => {
  const [services, setservices] = useState([])
  useEffect(() => {
    axios.get(apiUrl + 'services').then(res => setservices(res.data.Response)).catch(res => console.log(res))
  }, [])




  return (
    <>
      <div classNameName="w-[100vw] h-[100vh]  ">
        <div className="flex justify-evenly items-center overflow-auto ">

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-[55%] ">
            <div className="flex items-center justify-end py-4 bg-gradient-to-r from-cyan-500 to-blue-500  ">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input type="text" id="table-search-users" className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users" />
              </div>
            </div>
            <table className="w-full text-sm text-left dark:text-gray-400">
              <thead className="text-base  uppercase bg-gray-100  dark:text-violet-600">
                <tr>

                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    description
                  </th>
                  <th scope="col" className="px-6 py-3">
                    price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    gender
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className='overflow-y-auto' style={{ maxHeight: '500px' }}  >
                {services.map((servicios) => (


                  <tr key={servicios._id} className="bg-white border-t  dark:border-blue-200 hover:text-white dark:hover:bg-gradient-to-r from-cyan-500 to-blue-500 ">

                    <th scope="row" className="flex  hover:text-white items-center px-6 py-4 font-medium  dark:text-black">
                      <img className="w-14 h-14  rounded-xl bg-white " src={servicios.foto} />
                      <div className="pl-3 ">
                        <div className="text-base font-semibold">{servicios.nombre}</div>
                      </div>
                    </th>
                    <td className="px-6 py-4 w-[40%]">
                      {servicios.descripcion}
                    </td>
                    <td className="px-6 py-6">
                      $:{servicios.precio}
                    </td>
                    <td className="px-6 py-4">
                      {servicios.serviceTypeId.name}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-x-4 items-center ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-blue-600 ">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                        </svg>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 stroke-red-600 ">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                        </svg>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>



        </div>

      </div>

    </>
  )
}

export default CrudService