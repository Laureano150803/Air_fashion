import React from 'react'
import imgDamas from '/src/assets/images/por_silas.jpg'
import ReactDOM from 'react-dom';
import { Tilt } from 'react-tilt'
import '../TiltComponent.css'

const CardService3D = () => {

    const defaultOptions ={
        reverse: false,
        max: 35,
        perspective: 1000,
        scale: 1.1,
        speed: 1000,
        transition: true,
        axis: null,
        reset: true,
        easing:"cubic-bezier(.03,.98,.52,.99)"

    }
   
  return (
    <>
    <Tilt options={defaultOptions} style={{ height: 620, width: 410, backgroundImage:'url("src/assets/images/por_silas.jpg")' }}  className='flex justify-center items-center bg-transparent'>
        <div  className='flex justify-center items-center text-white text-4xl' data-tilt >hola mundo </div>
    </Tilt>
    
    </>
  )
}


export default CardService3D