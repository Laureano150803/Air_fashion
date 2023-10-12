import HomeCarrucel from "./components/HomeCarrucel"
import './app.css'
import axios from "axios"
import { useEffect, useState } from "react"
import apiUrl from "../api"

function App() {

  const [services, setServices] = useState([])

  useEffect(()=>{
    axios.get(apiUrl+'services').then(res => setServices(res.data.Response)).catch(res=>console.log(res))
  },[])

  console.log(services)


  return (
    <>
    <div className="App">
      <HomeCarrucel/>
    </div>
    <div className="h-[30vh] border border-black w-[100%] flex">
      {services.map((service) =>(

        <div key={service._id} className={`w-[10%] border border-black bg-[${service.serviceTypeId.color}]`}>

          <p>
            {service.nombre}
          </p>

        </div>
      ))}
      
    </div>

    </>
  )
}

export default App
