
import { Tilt } from 'react-tilt';
import { Link } from 'react-router-dom';
import '../TiltComponent.css';
import axios from 'axios';
import apiUrl from '../../api';
import { useEffect, useState } from 'react';

const CardService3D = () => {
  const [typeService, settypeService] = useState([])
  
  useEffect(() => {
    axios.get( apiUrl + 'types').then(res => settypeService(res.data.Response)).catch(res=>console.log(res))
  }, [])
  
 
  const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1.1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  return (
    <>
    {typeService.map(service => (
      

      <Link to={'/register'} key={service._id}   className='w-[25%]'>

        <Tilt
          options={defaultOptions}
          style={{
            height: 620,
            backgroundImage: `url("${service.foto}")`,
            transformStyle: 'preserve-3d',
            backgroundSize: 'cover '
            
          }}
          className='flex justify-center items-center bg-transparent snap-none '
        >
          <p style={{transform: 'translateZ(40px)'}} to={'/register'} className='flex justify-center items-center  text-white text-4xl' data-tilt>
            {service.name }
          </p>
        </Tilt>
      </Link>
    ))}
    </>
  );
};

export default CardService3D;
