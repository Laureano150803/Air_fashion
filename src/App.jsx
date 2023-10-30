import HomeCarrucel from "./components/HomeCarrucel"
import './app.css'
import axios from "axios"
import { useEffect, useState } from "react"
import apiUrl from "../api"
import LittleOfUs from "./components/LittleOfUs"
import ImageGallery from "./components/ImageGallery"
import CardsHairdresser from "./components/CardsHairdresser"
import CardService3D from "./components/CardService3D"


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
    <div>
      <LittleOfUs/>
    </div>
    <div>
      <ImageGallery/>
    </div>
    <div>
      <CardsHairdresser/>
    </div>
    <div  >
      <CardService3D/>
    </div>
    <div className="h-auto  border border-black w-[100%] flex flex-wrap">

      {services.map((service) =>(

        <div key={service._id} className={`w-[10%] border border-black bg-${service.serviceTypeId.color}`}>

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
