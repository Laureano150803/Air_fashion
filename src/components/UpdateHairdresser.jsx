import axios from 'axios';
import apiUrl from '../../api';
import { useState } from 'react';

export const UpdateHairdresser = ({ close, id, reload }) => {
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
   

    axios
      .patch(apiUrl + `peluqueros/${id}`, data, headers)
      .then((res) => {
        console.log(res)
        reload(true)})
      .catch((error) => console.error(error));
  }

  return (
    <div className='w-[35rem] bg-black rounded-xl h-[32rem] flex justify-center items-center flex-col'>
      <div onClick={close} className=' flex w-[100%]  justify-between items-center bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-purple-900 to-indigo-500 p-5 rounded-xl mb-7'>
        <h1 className='text-3xl text-white text-css'>

          Edit Hairdresser</h1>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-8 h-8 stroke-white mr-4 cursor-pointer" >
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>
      <form className='flex flex-col justify-center items-center  ' onSubmit={edictHairdresser}>

        <div className="container5  flex flex-col justify-center items-end  gap-5 m-6 ">
          <span></span>
          <div className='borderLine5 flex justify-center items-center'></div>

          <div className="flex items-center justify-center ">

            <div className="relative z-10 w-[15rem] group">
              <input type='text' value={name} onChange={(e) => setName(e.target.value)} className=" block py-2.5 px-0 w-[10rem] text-xl t bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white dark:focus:border-y-slate-50 focus:outline-none focus:ring-0 focus:border-y-slate-50 peer" placeholder=" "  />
              <label for="floating_first_name" className="peer-focus:font-medium absolute  text-xl text-slate-50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-50  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
            </div>

            <div className="relative z-10 w-[15rem] group">
              <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="block py-2.5 px-0 w-[10rem] text-xl  bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white dark:focus:border-y-slate-50 focus:outline-none focus:ring-0 focus:border-y-slate-50 peer" placeholder=" "  />
              <label for="floating_last_name" className="peer-focus:font-medium absolute text-xl text-slate-50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-50  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
            </div>
          </div>

          <div className="flex justify-evenly items-center ">
            <div className="relative z-10 w-[15rem] mb-6 group">
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="block py-2.5 px-0 w-[10rem] text-xl  bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white dark:focus:border-y-slate-50 focus:outline-none focus:ring-0 focus:border-y-slate-50 peer" placeholder=" "  />
              <label for="floating_phone" className="peer-focus:font-medium absolute text-xl text-slate-50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-50  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
            </div>

            <div className="relative z-10 w-[15rem] mb-6 group">
              <input type="text" value={ID} onChange={(e) => setID(e.target.value)} className="block py-2.5 px-0 w-[10rem] text-xl  bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white dark:focus:border-y-slate-50 focus:outline-none focus:ring-0 focus:border-y-slate-50 peer" placeholder=" "  />
              <label for="floating_company" className="peer-focus:font-medium absolute text-xl text-slate-50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-50  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">ID</label>
            </div>
          </div>
        </div>


        <button type="submit" className='container3 z-10 text-xl  text-white bg-transparent p-4'>
                        <span></span>
                        <div className='borderLine4 flex justify-center items-center'></div>
                        <h1 className='z-10 text-css'>

                        Update
                        </h1>
                    </button>
      </form>
    </div>
  );
};
