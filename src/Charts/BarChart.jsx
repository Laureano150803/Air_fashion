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
  
  const mesesUnicosSet = new Set();

  const array = chart.map(mes => {
    const nombreMes = dayjs(mes.inicio).format('MMMM');
    mesesUnicosSet.add(nombreMes);
    return nombreMes;
  });
  
  const mesesUnicosArray = Array.from(mesesUnicosSet);

    const precios = chart.map(precio => precio.servicio_id.precio);

    const sumaPrecios = precios.reduce((total, precio) => total + precio, 0);
    

    let data = {
      
        labels: mesesUnicosArray,
        datasets: [{
          label: `# of Votes`,
          data: [sumaPrecios],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 99, 132, 0.2)'

         
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(255, 99, 132, 0.2)'

          ],
          borderWidth: 1
        }]
      };
    
      let options = {
        maintainAspectRatio: false,
        scales: {
        },
        legend: {
          labels: {
            fontSize: 25,
          },
        },
      }

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