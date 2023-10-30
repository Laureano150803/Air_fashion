import React, { useState, useEffect } from 'react';
import axios from 'axios';
import apiUrl from '../../api.js';
import AppointmentsTable from './AppointmentsTable.jsx';
import FormAppoiment from './FormAppoiment.jsx';
import showSwalAlert from '../showAlert.js';
import { useNavigate } from 'react-router-dom';

export default function AppiomentClient() {
  const token = localStorage.getItem('token');
  const headers = { headers: { 'authorization': `Bearer ${token}` } };
  const navigate = useNavigate()
  const [showForm, setshowForm] = useState(false);

  function openAndCloseForm(){
    setshowForm(!showForm)
  }
  function confirmAccount() {
    axios.get(apiUrl + 'google', headers).then(res => {
      showSwalAlert('success', 'Choose your appoiment!')
      let url = res.data.redirect
      const ventana = window.open(url, "_blank", "width=500,height=500");
      ventana.location.href = url;
      openAndCloseForm()
    }).catch(res => {
      showSwalAlert('error', 'Something went wrong')
      navigate('/appointment')
    })
  }
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
      axios.get(apiUrl + 'google/pending/appointments', headers)
          .then(res => {
              setAppointments(res.data.Response);
          })
          .catch(res => {
              setAppointments([]);
          });
  }, []);

  return (
    <div className='h-screen'>
      {showForm && (<FormAppoiment state={openAndCloseForm}/>)}
      <h1>Horario de Citas</h1>
      {appointments?.length === 0 ? (
        <div>No hay citas agendadas</div>
      ) : (<AppointmentsTable appointments={appointments}/>)}
      
    
    <button className='bg-cyan-500 px-3 rounded-md' onClick={confirmAccount}>
      Agendar Cita
    </button>
  </div>
  );
}
