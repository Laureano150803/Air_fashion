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
        <div  className="flex justify-around bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-60% bg-purple-500 to-90%">
          <CardService3D />
        </div>

      </div>


      

    </>
  )
}

export default App
