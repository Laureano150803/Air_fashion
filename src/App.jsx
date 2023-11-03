import HomeCarrucel from "./components/HomeCarrucel"
import './app.css'
import axios from "axios"
import { useEffect, useState } from "react"
import apiUrl from "../api"
import LittleOfUs from "./components/LittleOfUs"
import ImageGallery from "./components/ImageGallery"
import CardsHairdresser from "./components/CardsHairdresser"
import CardService3D from "./components/CardService3D"
import {Card,CardHeader,CardBody,CardFooter,Typography,Button,} from "@material-tailwind/react";


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
      <Card className="mt-6 w-96">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          UI/UX Review Check
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Read More</Button>
      </CardFooter>
    </Card>
        
      </div>






    </>
  )
}

export default App
