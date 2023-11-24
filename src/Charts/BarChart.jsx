import React, { useEffect, useState } from 'react'
import { Chart as ChartJS , BarElement, CategoryScale, LinearScale } from 'chart.js'
import { Bar } from 'react-chartjs-2'
import axios from 'axios'
import apiUrl from '../../api'
import dayjs from 'dayjs'



ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement
)

const BarChart = () => {
  
  const [chart, setchart] = useState([])

  useEffect(() => {
  
    axios.get(apiUrl + 'google/done/appointments')
    .then(res=>setchart(res.data.Response))
    .catch(res=>console.log(res))
  }, [])
  
  const preciosPorMes = {};

chart.forEach((mes) => {
  const nombreMes = dayjs(mes.inicio).format('MMMM');
  const precio = mes.servicio_id.precio;

  if (!preciosPorMes[nombreMes]) {
    preciosPorMes[nombreMes] = precio;
  } else {
    preciosPorMes[nombreMes] += precio;
  }
});

const mesesUnicosArray = Object.keys(preciosPorMes);
const sumasPorMes = Object.values(preciosPorMes);

let data = {
  labels: mesesUnicosArray,
  datasets: [{
    label: `Total Price per Month`,
    data: sumasPorMes,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1,
  }],
};

let options = {
  maintainAspectRatio: false,
  scales: {},
  legend: {
    labels: {
      fontSize: 25,
    },
  },
};

  return (
    <>
    <div className="">
        <Bar
        data={data}
        height={400}
        options={options}
        
        />
    </div>
    </>
  )
}

export default BarChart