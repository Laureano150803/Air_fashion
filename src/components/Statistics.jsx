import React, { useEffect, useState } from 'react';
import axios from 'axios';
import apiUrl from '../../api';
import BarChart from '../Charts/BarChart';

export default function Statistics() {


  return (
    <div className='min-h-screen min-w-full'>
      <div className="">
        <BarChart/>
      </div>
      
    </div>
  );
}
