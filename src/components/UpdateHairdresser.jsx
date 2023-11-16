import axios from 'axios';
import apiUrl from '../../api';
import { useState } from 'react';

export const UpdateHairdresser = ({ close, id, reload}) => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [ID, setID] = useState('');

  function edictHairdresser(e) {
    e.preventDefault();

    const token = localStorage.getItem('token');
    const headers = { headers: { authorization: `Bearer ${token}` } };


    // Check if the fields are empty before adding them to the data object
    const data = {};
    if (name.trim() !== '') {
      data.nombre = name.trim();
    }
    if (lastName.trim() !== '') {
      data.apellido = lastName.trim();
    }
    if (phone.trim() !== '') {
      data.telefono = phone.trim();
    }
    if (ID.trim() !== '') {
      data.cedula = ID.trim();
    }
    reload(true)

    axios
      .patch(apiUrl + `peluqueros/${id}`, data, headers)
      .then((res) => console.log(res))
      .catch((error) => console.error(error));
  }

  return (
    <div>
      <div onClick={close} className='cursor-pointer'>
        X
      </div>
      <form className='flex flex-col' onSubmit={edictHairdresser}>
        <input
          type='text'
          placeholder='Nombre'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='text'
          placeholder='Apellido'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type='text'
          placeholder='Cedula'
          value={ID}
          onChange={(e) => setID(e.target.value)}
        />
        <input
          type='text'
          placeholder='Telefono'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input type='submit' value='Update' />
      </form>
    </div>
  );
};
