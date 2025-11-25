import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import apiUrl from '../../api'
import img1 from '/src/assets/images/barber-man.jpg'
import '../backgroundSlider.css';

export default function DetailTypeService() {
  const { id, genero } = useParams()
  const [servicios, setServicios] = useState([])
  useEffect(() => {
    axios.get(apiUrl + `types/${id}`).then(res => setServicios(res.data.Response)).catch(res => console.log(res))
  }, [])

  let Genero = '';

  switch (genero) {
    case 'Gentlemen':
      Genero = 'https://img.freepik.com/foto-gratis/vista-lateral-hombre-que-consigue-nuevo-corte-pelo_23-2148242786.jpg?w=740&t=st=1698955336~exp=1698955936~hmac=14023ef5f24caa73cc8e6912a50eb6a60e29cc6a72bba1f2ed6be928e4ddfd41';
      break;
    case 'Ladies':
      Genero = 'https://img.freepik.com/foto-gratis/mujer-salon-peluqueria_144627-8915.jpg?w=740&t=st=1698955130~exp=1698955730~hmac=a45a8cecb89093ce0f8bd07ec1f237c589c461753bed05ddf3a8d819ea919c46';
      break;
    case 'Children':
      Genero = 'https://st4allthings4p4ci.blob.core.windows.net/allthingshair/allthingshair/wp-content/uploads/sites/13/2023/03/15203013/corte-de-pelo-el-7-colombiano-2.jpg';
      break;
    case 'Girls':
      Genero = 'https://img.freepik.com/foto-gratis/chica-guapa-pinzas-cabello_23-2148843733.jpg?w=740&t=st=1698688334~exp=1698688934~hmac=b237375eab9fcc3c2551ba4499dd25f12905d69c99da7fd45c973230658cd251';
      break;
    default:
      Genero = '';
  }


  return (
    <>
      <div className="flex justify-evenly w-[100%] ">

        <div className="flex justify-between w-[40rem] h-[70rem] bg-no-repeat bg-center bg-cover rounded-2xl m-10 " style={{ backgroundImage: `url("${Genero}")` }}>


        </div>
        <div className=" w-[60%]">

          <h1 className=' aboutUs text-4xl text-center text-gray-900  mt-8 '>Fashion Hairdressing Services For {genero}</h1>
          <div className="line-loader  h-1 mb-8"></div>


          <div className="flex flex-wrap gap-12 mb-10 justify-center">

            {servicios.map(servicio => (



              <div key={servicio._id} className='flex flex-col items-center gap-2 h-auto shadow-md shadow-blue-400/40 rounded-xl'>
                <div className="flex flex-wrap ">
                  <img src={servicio.foto} className='h-24 w-24' />
                  <div className="flex flex-col items-center  justify-between">
                    <h1 className='aboutUs text-2xl '>{servicio.nombre}</h1>
                    <div className="line-loader w-48 h-1"></div>

                    <p className='aboutUs text-xl  '>$:{servicio.precio}</p>

                    <div className="flex flex-col aboutUs w-72 ">
                      <p className='text-lg'>{servicio.descripcion}</p>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </>

  )
}
