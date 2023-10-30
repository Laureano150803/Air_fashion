import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import apiUrl from '../../api'

export default function DetailTypeService() {
    const {id} = useParams()
    const [servicios, setServicios]=useState([])
    useEffect(()=>{
        axios.get(apiUrl + `types/${id}`).then(res=>setServicios(res.data.Response)).catch(res=>console.log(res))
    },[])
  return (
    <>
    {servicios.map(servicio=>(
        <div key={servicio._id}>
            <p>{servicio.nombre}</p>
            <img src={servicio.foto} alt="" />

        </div>
        
    ))}
    </>
    
  )
}
