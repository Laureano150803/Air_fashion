import HomeCarrucel from "./components/HomeCarrucel"
import './app.css'
import axios from "axios"
import { useEffect, useState } from "react"
import apiUrl from "../api"
import LittleOfUs from "./components/LittleOfUs"
import ImageGallery from "./components/ImageGallery"
import CardsHairdresser from "./components/CardsHairdresser"
import CardService3D from "./components/CardService3D"
import Sidebar from "./components/Sidebar"


function App() {

  const [services, setServices] = useState([])

  useEffect(() => {
    axios.get(apiUrl + 'services').then(res => setServices(res.data.Response)).catch(res => console.log(res))
  }, [])

  console.log(services)


  return (
    <>
      <div className="App">
        <HomeCarrucel />
      </div>
      <div>
        <LittleOfUs />
      </div>
      <div>
        <ImageGallery />
      </div>
      <div className="flex flex-col">
        <div className="mb-14 ">
          <CardsHairdresser />
        </div>

        <div>
          <CardService3D />
        </div>
      </div>

      <div>
        <Sidebar/>
      </div>
    </>
  )
}

export default App
