import axios from 'axios';
import apiUrl from '../../api';
import { useRef, useState } from 'react';

export const UpdateHairdresser = ({ close, id, reload }) => {
  const foto = useRef()
  const name =useRef(null)
  const lastName=useRef(null)
  const phone= useRef(null)
  const ID=useRef(null)

  async function edictHairdresser(e) {
    e.preventDefault();

    const token = localStorage.getItem('token');
    const headers = { headers: { authorization: `Bearer ${token}` } };

    const currentNombre = name.current.value;
    const currentLastName = lastName.current.value;
    const currentPhone = phone.current.value;
    const currentID = ID.current.value;
    const currentfoto = foto.current.files[0];

    const data = {};
    if (currentNombre.trim() !== '') {
      data.nombre = currentNombre.trim();
    }
    if (currentLastName.trim() !== '') {
      data.apellido = currentLastName.trim();
    }
    if (currentPhone.trim() !== '') {
      data.telefono = currentPhone.trim();
    }
    if (currentID.trim() !== '') {
      data.cedula = currentID.trim();
    }
    const hasProperties = Object.keys(data).length > 0;
      if (hasProperties || currentfoto) {
        try {
          const formData = new FormData();
          Object.entries(data).forEach(([key, value]) => {
            formData.append(key, value);
          });
          if (currentfoto) {
            formData.append('foto', currentfoto);
          }
          const response = await axios.patch(apiUrl + `peluqueros/${id}`, formData);
          reload(true)
        } catch (error) {
          console.error(error);
        }
      };
      
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
              <input type='text' ref={name} className=" block py-2.5 px-0 w-[10rem] text-xl t bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white dark:focus:border-y-slate-50 focus:outline-none focus:ring-0 focus:border-y-slate-50 peer" placeholder=" " />
              <label for="floating_first_name" className="peer-focus:font-medium absolute  text-xl text-slate-50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-50  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
            </div>

            <div className="relative z-10 w-[15rem] group">
              <input type="text" ref={lastName}  className="block py-2.5 px-0 w-[10rem] text-xl  bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white dark:focus:border-y-slate-50 focus:outline-none focus:ring-0 focus:border-y-slate-50 peer" placeholder=" " />
              <label for="floating_last_name" className="peer-focus:font-medium absolute text-xl text-slate-50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-50  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
            </div>
          </div>

          <div className="flex justify-evenly items-center ">
            <div className="relative z-10 w-[15rem] mb-6 group">
              <input type="number"  ref={phone} className="block py-2.5 px-0 w-[10rem] text-xl  bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white dark:focus:border-y-slate-50 focus:outline-none focus:ring-0 focus:border-y-slate-50 peer" placeholder=" " />
              <label for="floating_phone" className="peer-focus:font-medium absolute text-xl text-slate-50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-50  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number</label>
            </div>

            <div className="relative z-10 w-[15rem] mb-6 group">
              <input type="number" ref={ID} className="block py-2.5 px-0 w-[10rem] text-xl  bg-transparent border-0 border-b-2 border-gray-300 appearance-none text-white dark:focus:border-y-slate-50 focus:outline-none focus:ring-0 focus:border-y-slate-50 peer" placeholder=" " />
              <label for="floating_company" className="peer-focus:font-medium absolute text-xl text-slate-50 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-slate-50  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">ID</label>
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-auto z-20 ">

            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full border-2 border-dashed rounded-lg cursor-pointer"
            >
              <div className="flex flex-col items-center justify-center ">
                <svg
                  className="w-8 h-8  text-white "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-white">
                  or drag and drop
                </p>
                <p className="text-xs text-white">
                  SVG, PNG, JPG 
                </p>
              </div>
              <input
              ref={foto}
                id="dropzone-file"
                type="file"
                className="hidden"
              />
            </label>
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
