import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import apiUrl from '../../api';
import service from '../assets/images/service.png';
import paid from '../assets/images/paid.png'
import dayjs from 'dayjs';
import Swal from 'sweetalert2';
import '../scroll.css'
export default function HairDresserPanel() {
  const token = localStorage.getItem('token');
  const headers = { headers: { 'authorization': `Bearer ${token}` } };

  const [citas, setCitas] = useState([]);
  useEffect(() => {
    axios.get(apiUrl + 'google/allMyAppointments', headers)
      .then(res => setCitas(res.data.response))
      .catch(res => console.log(res));
  }, []);

  async function markAsDone(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, mark as Done!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.patch(apiUrl + `google/appointment/${id}`, null, headers);

          // Update the local state to re-render the component
          setCitas((prevCitas) => prevCitas.map(cita => {
            if (cita._id === id) {
              return { ...cita, status: 'DONE' }; // Assuming 'Done' is the new status
            }
            return cita;
          }));

          Swal.fire({
            title: "Updated!",
            text: "The appointment has been updated.",
            icon: "success"
          });
        } catch (error) {
          console.log(error);
        }
      }
    });
  }

  const doneAppointments = citas.filter(cita => cita.status === 'DONE');
  const pendingAppointments = citas.filter(cita => cita.status === 'PENDING');

  console.log(citas)

  return (
    <>
      <div className='flex min-h-screen w-full'>

        <div className='flex flex-col w-[50%] custom-scrollbar' style={{ overflowY: 'auto', maxHeight: '95vh' }}>


          <h1 className='text-4xl text-center font-bold mb-2'>Pending appointments</h1>
          {pendingAppointments.length === 0 && <div className='font-mono text-center'>You dont have Pending Appointments</div>}


          {pendingAppointments.map(cita => (

            <div key={cita._id} className=" p-8  border-t  dark:border-blue-200 flex gap-4">
              <img src={cita?.servicio_id?.foto} className='h-16 w-16 bg-slate-50 rounded-3xl shadow-xl shadow-blue-200 ' />
              <div className="flex flex-col gap-2">

                <div className="flex gap-4 ">
                  <h1 className='aboutUs text-xl'>{`${cita.cliente_id.nombre} ${cita.cliente_id.apellido}`}  </h1>
                  <div className=" flex ">
                    <img src={service} className='h-7 w-7 ' />
                    <h1 className='aboutUs text-xl'>{cita.servicio_id.nombre}</h1>
                    <img src={paid} className='h-7 w-7 ml-3' />
                    {cita.metodoPago === 'cash payment' && (

                      <h1 className='aboutUs text-xl ml-3 text-red-600 border-b-2 border-red-600 hover:scale-125 hover:ml-5 duration-1000 cursor-pointer'>
                        {cita.metodoPago}
                      </h1>

                    )}

                    {cita.metodoPago !== 'cash payment' && (
                      <h1 className='aboutUs text-xl ml-3 text-red-600'>
                        {cita.metodoPago}
                      </h1>
                    )}
                  </div>
                </div>
                <div className=" flex gap-3 dark:text-gray-400/100 text-lg items-center ">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 stroke-2">
                    <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                  </svg>

                  <div className="flex gap-4 items-center divide-x-4">
                    <h1>{dayjs(cita.inicio).format('MMMM/DD/HH:mm')}</h1>
                    <div className="flex gap-2 pl-5 items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 stroke-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <h1>{cita.status}</h1>
                    </div>
                    <button
                      value={cita._id}
                      onClick={(e) => {
                        const id = e.currentTarget.getAttribute("value");
                        markAsDone(id);
                      }}
                      className='makeAppoiment m-0 p-0'
                      style={{ margin: '0px', padding: '0px', paddingLeft: '2px' }}
                    >mark as done</button>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='w-[50%] custom-scrollbar' style={{ overflowY: 'auto', maxHeight: '95vh' }}>

          <h1 className='text-4xl text-center font-bold mb-2'>Done appointments</h1>

          {doneAppointments.length === 0 && <div className='font-mono text-center'>You dont have Done Appointments</div>}


          {doneAppointments.map(cita => (
            <>
              <div key={cita._id} className="animate-fade-right animate-duration-[3000ms] p-8  border-t  dark:border-blue-200 flex gap-4">
                <img src={cita?.servicio_id?.foto} className='h-16 w-16 bg-slate-50 rounded-3xl shadow-xl shadow-blue-200 ' />
                <div className="flex flex-col gap-2">

                  <div className="flex gap-4 ">
                    <h1 className='aboutUs text-xl'>{`${cita.cliente_id.nombre} ${cita.cliente_id.apellido}`}  </h1>
                    <div className=" flex ">
                      <img src={service} className='h-7 w-7 ' />
                      <h1 className='aboutUs text-xl'>{cita.servicio_id.nombre}</h1>
                    </div>
                  </div>
                  <div className=" flex gap-3 dark:text-gray-400/100 text-lg items-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 stroke-2">
                      <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                    </svg>

                    <div className="flex gap-4 items-center divide-x-2 ">
                      <h1>{dayjs(cita.inicio).format('MMMM/DD/HH:mm')}</h1>
                      <div className="flex gap-2 pl-5 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 stroke-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h1>{cita.status}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>

          ))}
        </div>
      </div>
    </>
  );
}
