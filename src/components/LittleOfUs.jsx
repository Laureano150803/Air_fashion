import React from 'react'
import logo1 from '/src/assets/images/polvo.png'
import logo2 from '/src/assets/images/producto.png'
import logo3 from '/src/assets/images/atencion1.png'
import logo4 from '/src/assets/images/materiales.png'



import '../backgroundSlider.css'



const LittleOfUs = () => {
  return (
    <div className='w-[100%] bg-slate-50 flex justify-evenly items-center flex-wrap h-[48vh] gap-7 md:h-[] '>
       
        <div className=" w-[20rem]  flex flex-col rounded-xl justify-center bg-white  shadow-lg shadow-blue-500/60 h-[80%] ">
            <div className='flex justify-center items-center' >
                <img src={logo1} className='h-20 animate-bounce animate-duration-[3000ms]' />
            </div>
            
            <div className='  flex flex-col justify-center items-center '>
                <h2 className='text-css-h1'>Professional Team </h2>
               <br />
                <p className='text-center'>Our 'Professional Team' is made up of a highly qualified group of experts in their respective fields, dedicated to providing exceptional service</p>
            </div>
        </div>

        <div className=" w-[20rem] flex flex-col rounded-xl justify-center bg-white  shadow-lg shadow-blue-500/60 h-[80%]">
            <div className='flex justify-center items-center' >
                <img src={logo2} className='h-20 animate-bounce animate-duration-[3000ms] ' />
            </div>
            
            <div className='  flex flex-col justify-center items-center  '>
                <h2 className='text-css-h1'>Premium Products</h2>
              <br />
                <p className='text-center'>At Hair Fashion, we use only the best products for your hair so that it remains shiny and strong. </p>
            </div>
        </div>

        <div className=" w-[20rem] flex flex-col rounded-xl justify-center bg-white  shadow-lg shadow-blue-500/60 h-[80%]">
            <div className='flex justify-center items-center' >
                <img src={logo4} className='h-20 animate-bounce animate-duration-[3000ms] ' />
            </div>
            
            <div className='  flex flex-col justify-center items-center '>
                <h2 className='text-css-h1'>The best equipment for your hair </h2>
               <br />
                <p className='text-center'>Our salon uses top-notch equipment for all the services we provide.</p>
            </div>
        </div>

        <div className=" w-[20rem] flex flex-col rounded-xl justify-center bg-white  shadow-lg shadow-blue-500/60 h-[80%]">
            <div className='flex justify-center items-center' >
                <img src={logo3} className='h-20 animate-bounce animate-duration-[3000ms] ' />
            </div>
            
            <div className='  flex flex-col justify-center items-center '>
                <h2 className='text-css-h1'>We have the best customer service </h2>
               <br />
                <p className='text-center'>Exceptional service experience and satisfaction guaranteed</p>
            </div>
        </div>
    </div>
  )
}

export default LittleOfUs