import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import apiUrl from '../../api';
import service from '../assets/images/service.png';
import paid from '../assets/images/paid.png'
import dayjs from 'dayjs';
import Swal from 'sweetalert2';
import '../scroll.css'
import TableOfCalendar from './TableOfCalendar';
import { useParams } from 'react-router-dom';

export default function HairDresserPanel() {
  const{id}=useParams()
  const token = localStorage.getItem('token');
  const headers = { headers: { 'authorization': `Bearer ${token}` } };

  const [citas, setCitas] = useState([]);
  const [filter, setFilter] = useState(false)
  const [selectedDate, setSelectedDate] = useState(new Date())

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
  };
  useEffect(() => {

    
    const role = localStorage.getItem('role')

    if(role === '3'){
      axios.get(apiUrl + `google/hairdresser/appointments/${id}`, headers)
      .then(res => setCitas(res.data.response))
      .catch(res => console.log(res));
    }

    if(role==='2'){
      axios.get(apiUrl + 'google/allMyAppointments', headers )
      .then(res => setCitas(res.data.response))
      .catch(res => console.log(res));
    }

      
    
   
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
              return { ...cita, status: 'DONE' };
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
          await axios.patch(apiUrl + `google/cancel/${id}`, null, headers)

          // Update the local state to re-render the component
          setCitas((prevCitas) => prevCitas.map(cita => {
            if (cita._id === id) {
              return { ...cita, status: 'CANCELED' };
            }
            return cita;
          }));

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


  const doneAppointments = citas.filter(cita => cita.status === 'DONE');
  const pendingAppointments = citas.filter(cita => cita.status === 'PENDING');

  return (
    <>
      <div className='flex min-h-screen w-full bg-gray-200'>

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
                    >mark as done
                    </button>
                    {dayjs().diff(dayjs(cita.inicio), 'minute') > 20 &&
                      <button
                        value={cita._id}
                        onClick={(e) => {
                          const id = e.currentTarget.getAttribute("value");
                          markAsCanceled(id);
                        }}
                        className='makeAppoiment'
                        style={{ margin: '0px', padding: '0px', paddingLeft: '2px', color: 'red' }}>
                        absentee!
                      </button>
                    }


                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='w-[50%] custom-scrollbar' style={{ overflowY: 'auto', maxHeight: '95vh' }}>

          <div className='flex w-[100%] justify-center'>
            <h1 onClick={() => setFilter(!filter)} className='text-4xl font-bold mb-2 flex items-center'>Done appointments <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-4 cursor-pointer hover:bg-slate-100 hover:rounded-full hover:scale-105 duration-100 ">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
            </svg></h1>


          </div>
          {doneAppointments.length === 0 && <div className='font-mono text-center'>You dont have Done Appointments today</div>}

          {filter && <TableOfCalendar onDateChange={handleDateChange} />}


          {doneAppointments.filter(cita => dayjs(cita.inicio).format('MMMM/DD') === dayjs(selectedDate).format('MMMM/DD')).map(citas => (

            <>
              <div key={citas._id} className="animate-fade-right animate-duration-[3000ms] p-8  border-t  dark:border-blue-200 flex gap-4">
                <img src={citas?.servicio_id?.foto} className='h-16 w-16 bg-slate-50 rounded-3xl shadow-xl shadow-blue-200 ' />
                <div className="flex flex-col gap-2">

                  <div className="flex gap-4 ">
                    <h1 className='aboutUs text-xl'>{`${citas.cliente_id.nombre} ${citas.cliente_id.apellido}`}  </h1>
                    <div className=" flex ">
                      <img src={service} className='h-7 w-7 ' />
                      <h1 className='aboutUs text-xl'>{citas.servicio_id.nombre}</h1>
                      <img src={paid} className='h-7 w-7 ml-3' />
                      <h1 className='aboutUs text-xl ml-3 text-red-600'>
                        {citas.metodoPago}
                      </h1>
                    </div>
                  </div>
                  <div className=" flex gap-3 dark:text-gray-400/100 text-lg items-center ">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 stroke-2">
                      <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clipRule="evenodd" />
                    </svg>

                    <div className="flex gap-4 items-center divide-x-2 ">
                      <h1>{dayjs(citas.inicio).format('MMMM/DD/HH:mm')}</h1>

                      <div className="flex gap-2 pl-5 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 stroke-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h1>{citas.status}</h1>
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
