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



      

    </>
  )
}

export default App
