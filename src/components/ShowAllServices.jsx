import axios from 'axios';
import React, { useEffect, useState } from 'react';
import apiUrl from '../../api';

const ShowAllServices = () => {
  const [allServices, setallServices] = useState([]);
  const [typesServices, setaTypeServices] = useState([]);

  useEffect(() => {
    axios.get(apiUrl + 'services')
      .then(res => setallServices(res.data.Response))
      .catch(error => console.log('Error fetching services:', error));

    axios.get(apiUrl + 'types')
      .then(res => setaTypeServices(res.data.Response))
      .catch(error => console.log('Error fetching types:', error));
  }, []);
  

  const generos = {
    Gentlemen: "https://img.freepik.com/foto-gratis/vista-lateral-hombre-que-consigue-nuevo-corte-pelo_23-2148242786.jpg?w=740&t=st=1698955336~exp=1698955936~hmac=14023ef5f24caa73cc8e6912a50eb6a60e29cc6a72bba1f2ed6be928e4ddfd41",
    Ladies: "https://img.freepik.com/foto-gratis/mujer-salon-peluqueria_144627-8915.jpg?w=740&t=st=1698955130~exp=1698955730~hmac=a45a8cecb89093ce0f8bd07ec1f237c589c461753bed05ddf3a8d819ea919c46",
    Children: "https://st4allthings4p4ci.blob.core.windows.net/allthingshair/allthingshair/wp-content/uploads/sites/13/2023/03/15203013/corte-de-pelo-el-7-colombiano-2.jpg",
    Girls: "https://img.freepik.com/foto-gratis/chica-guapa-pinzas-cabello_23-2148843733.jpg?w=740&t=st=1698688334~exp=1698688934~hmac=b237375eab9fcc3c2551ba4499dd25f12905d69c99da7fd45c973230658cd251"
  };

  const filteredServices = {};

  typesServices.forEach((type) => {
    const servicesFilter = allServices.filter((service) => service.serviceTypeId._id === type._id);


    // Almacenar la URL de la imagen como cover_photo en filteredServices
    filteredServices[type._id] = {
      services: servicesFilter,
      cover_photo: generos[type.name]
    };

  });



  return (
    <>

      {Object.entries(filteredServices).map(([typeId, { services, cover_photo }]) => (
        <div key={typeId} className="flex  w-[100%]">

          <div className=" flex justify-evenly">


          <h2 className='hidden'>{typesServices.find(type => type._id === typeId)?.name}</h2>



            <div className="flex justify-between w-[40rem] h-[70rem] bg-no-repeat bg-center bg-cover rounded-2xl m-10" style={{ backgroundImage: `url(${cover_photo})` }} >


            </div>
            <div className="flex flex-wrap gap-12 mb-10 h-[50%] w-[60%] justify-center">
              <h1 className=' font-extrabold text-center text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500'>Fashion Hairdressing Services For {typesServices.find(type => type._id === typeId)?.name}</h1>
              <div className="line-loader  h-1 mb-8"></div>

              {services.map((service) => (
                <div key={service._id} className='flex flex-col items-center gap-2 h-auto shadow-md shadow-blue-400/40 rounded-xl'>
                  <div className="flex flex-wrap ">
                    <img src={service.foto} className='h-24 w-24' />
                    <div className="flex flex-col items-center  justify-between">
                      <h1 className='aboutUs text-2xl '>{service.nombre}</h1>
                      <div className="line-loader w-48 h-1"></div>

                      <p className='aboutUs text-xl '>$:{service.precio}</p>

                      <div className="flex flex-col aboutUs w-72 ">
                        <p className='text-lg'>{service.descripcion}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      ))}
    </>
  );
};

export default ShowAllServices;
