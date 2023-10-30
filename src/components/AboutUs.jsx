import React from 'react'
import '../backgroundSlider.css';
import cliente from '../assets/images/cliente.jpg'
import LittleOfUs from './LittleOfUs';
import { Link } from 'react-router-dom';
import CardsHairdresser from './CardsHairdresser';




const AboutUs = () => {
    return (
        <>
            <div className="min-h-screen">
                <div className="bg-transparent bg-opacity-0 h-auto w-auto flex">
                    <div className="">
                        <p className='aboutUs text-gray-100 text-[12rem] z-10 pl-8  xxsm:text-[10rem]'>
                            About us
                        </p>
                        <div className="flex flex-col justify-between z-40 items-center  -translate-y-44 -translate-x-36 ">

                            <h3 className='text-css-h1 text-sm  text-gray-400  '>
                                Home / About us
                            </h3>

                            <h1 className=' aboutUs text-5xl text-black '>
                                About us
                            </h1>
                        </div>
                    </div>

                </div>

                <div className=" flex flex-wrap ">

                    <div className=" flex w-[50%] justify-center">
                        <img className='rounded-lg' src={cliente} />
                    </div>

                    <div className=" flex flex-col w-[50%] justify-around ">
                        <h1 className='aboutUs text-5xl '>
                            A Few Words About Our Salon
                        </h1>
                        <p className=' aboutUs text-xl'>
                            In our exclusive high-end beauty salon, excellence and sophistication meet to provide you with a unique experience in the care and transformation of your image. Our space has been meticulously designed to offer an atmosphere of luxury and elegance in every detail.
                            <br /><br />
                            From the moment you enter our salon, you are immersed in a world of beauty and well-being. Our decoration, with its modern and carefully selected design, creates an atmosphere of serenity and refinement. Every element, from the designer furniture to the soft, cozy lighting, has been chosen to offer maximum comfort and satisfaction.
                        </p>
                    </div>

                </div>
            </div>
          

            <div className='flex items-center justify-center h-96 bg-fixed bg-parallax bg-cover'>
                <h1 className=' text-5xl text-white uppercase' >
                    Customer service is a priority at our high-end salon
                </h1>

            </div>
            <div>
                <LittleOfUs />
            </div>
            <div className='flex flex-col justify-center  h-96 bg-fixed bg-parallax2 bg-cover'>
               <div className="flex flex-col justify-center ">

                <h1 className=' text-2xl text-white aboutUs' >
                    Customer service is a priority at our high-end salon
                </h1>
                <br />
                <button class="bg-blue-500 w-[10%] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                    Explore all Services
                </button>
               </div>

            </div>

            <div>
                <CardsHairdresser/>
            </div>



        </>

    )
}

export default AboutUs