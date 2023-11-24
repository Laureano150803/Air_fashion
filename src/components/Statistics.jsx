import React, { useEffect, useState } from 'react';
import axios from 'axios';
import apiUrl from '../../api';
import BarChart from '../Charts/BarChart';
import statistics from '/src/assets/images/undraw_all_the_data_re_hh4w.svg'

export default function Statistics() {


  return (
    <div className='min-h-screen min-w-full flex flex-col '>
      <div className=" flex justify-around items-center p-11">

        <div className="">

          <h1 className='font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500'>Statistics Hair Fashion </h1>
        </div>
        <div className="w-72 ">
          <img src={statistics} />
        </div>
      </div>
      <div className=" flex justify-center items-center flex-col ">
        <h1 className='font-bold '> Statistics of the months of the year</h1>
        <div className=" w-[70rem]  border-2 border-indigo-600">
          <BarChart />

        </div>
      </div>

    </div>
  );
}
