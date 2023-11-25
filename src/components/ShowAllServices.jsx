import axios from 'axios'
import React, { useEffect, useState } from 'react'
import apiUrl from '../../api'


const ShowAllServices = () => {
    const [allServices, setallServices] = useState([])

    useEffect(() => {
        axios.get( apiUrl + 'services').then(res => setallServices(res.data.Response)).catch(res=>console.log(res))
    
    }, [])
    
    
    

  return (
    <>
    <div className="">
        <h1>hola mudno </h1>
    </div>
    </>
  )
}

export default ShowAllServices