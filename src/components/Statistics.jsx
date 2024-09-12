import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BarChart from '../Charts/BarChart';
import statistics from '/src/assets/images/undraw_all_the_data_re_hh4w.svg'
import año from '/src/assets/images/undraw_new_year_2023_pfnc.svg'
import GoBackAdmin from './GoBackAdmin';
export default function Statistics() {
  const [totalAnual, settotalAnual] = useState(0)

  function onsettotalanual(totalAnual) {
    settotalAnual(totalAnual)

  }
  const role = localStorage.getItem('role')
  const navigate = useNavigate()
  useEffect(() => {
    if (role !== '3') {
      navigate('/')
    }
  }, [])

  return (
    <div className='min-h-screen min-w-full flex flex-col '>
      <div className=" flex justify-around items-center p-11">

        <div className=" flex">
          <div className='mr-2  h-24'>
            <GoBackAdmin />
          </div>

          <h1 className='font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500'>Statistics Hair Fashion </h1>
        </div>
        <div className="w-72 ">
          <img src={statistics} />
        </div>
      </div>
      <div className="flex justify-around items-center">

        <div className="flex flex-col">
          <h1 className='font-extrabold text-center text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500'>Total generated </h1>
          <div className="w-72">
            <img src={año} />
          </div>
          <h1 className='font-extrabold text-center text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500'>$:{totalAnual.toLocaleString('es')}</h1>
        </div>
        <div className=" flex justify-center items-center flex-col ">
          <h1 className='font-bold '> Statistics of the months of the year</h1>
          <div className=" w-[70rem]  border-2 border-indigo-600">
            <BarChart SettotalAnual={onsettotalanual} />

          </div>
        </div>
      </div>

    </div>
  );
}
