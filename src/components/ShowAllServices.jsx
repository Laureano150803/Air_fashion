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
  

  const filteredServices = {};

  typesServices.forEach((type) => {
    const servicesFilter = allServices.filter((service) => service.serviceTypeId._id === type._id);
    filteredServices[type._id] = servicesFilter;

  });



  return (
    <>
      {Object.entries(filteredServices).map(([typeId, services]) => (
        <div key={typeId} className="flex justify-evenly w-[100%]">
          {

          <h2 className='hidden'>{typesServices.find(type => type._id === typeId)?.name}</h2>

          
          }


          <div className="w-[60%]">

            <div className="flex flex-wrap gap-12 mb-10 justify-center">


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

