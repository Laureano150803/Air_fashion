import React from 'react';
import ReactDOM from 'react-dom';
import { Tilt } from 'react-tilt';
import { Link } from 'react-router-dom';
import '../TiltComponent.css';

const CardService3D = () => {
  const defaultOptions = {
    reverse: false,
    max: 30,
    perspective: 1000,
    scale: 1, // Mantén la escala en el eje X igual a 1
    scaleY: 1.2, // Aplica escala en el eje Y para el efecto 3D
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: 'cubic-bezier(.03,.98,.52,.99)',
  };

  return (
    <>
      <Link to={'/register'} className='w-[25%] overflow-x-hidden'>
        <Tilt
          options={defaultOptions}
          style={{
            height: 620,
            backgroundImage: 'url("https://i.pinimg.com/280x280_RS/ab/13/c9/ab13c9de74f1839af0d8464e0d91450b.jpg")',
            transformStyle: 'preserve-3d',
          }}
          className='flex justify-center items-center bg-transparent'
        >
          <p
            style={{ transform: 'translateZ(40px)' }}
            to={'/register'}
            className='flex justify-center items-center text-white text-4xl'
            data-tilt
          >
            hola mundo
          </p>
        </Tilt>
      </Link>
    </>
  );
};

export default CardService3D;
