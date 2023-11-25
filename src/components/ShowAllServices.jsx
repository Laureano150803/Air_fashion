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
        <div key={typeId} className="service-type">


          <h2 className='text-3xl'>{typesServices.find(type => type._id === typeId)?.name}</h2>


          {services.map((service) => (


            <div key={service._id} className="service">
              <p className=''>{service.nombre}</p>
              <p>{service.descripcion}</p>
              <p>{service.precio}</p>
              {/* Puedes acceder a otras propiedades aquí */}
              <img src={service.foto} alt={service.nombre} />
            </div>

            
          ))}
        </div>
      ))}
    </>
  );
};

export default ShowAllServices;
