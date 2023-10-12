import React from 'react'
import axios from 'axios'
import apiUrl from '../../api.js'



export default function AppiomentClient() {
  let token = localStorage.getItem('token')
  let headers = { headers: { 'authorization': `Bearer ${token}` } }
  function confirmAccount() {
    axios.get(apiUrl + 'google',headers).then(res =>{
      let url=res.data.redirect
      const ventana = window.open("", "MiVentanaEmergente", "width=600,height=400")
      ventana.location.href = url;
    }).catch(res=>console.log(res))
  }
 
  return (
    <>
      <button onClick={confirmAccount}>Agendar Cita</button>
    </>

  )
}
