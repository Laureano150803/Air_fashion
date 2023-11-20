import React from 'react'
import '../backgroundSlider.css';
import cliente from '../assets/images/cliente.jpg'
import LittleOfUs from './LittleOfUs';
import { Link } from 'react-router-dom';
import CardsHairdresser from './CardsHairdresser';
import useIntersection from './useIntersection';



const AboutUs = () => {
  
    const [element , isIntersecting]= useIntersection({
        threshold:1,
    });
    const [element2 , isIntersecting2]= useIntersection({
        threshold:1,
    });


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

                <div className=" flex flex-wrap overflow-hidden ">

                    <div ref={element} className=" flex w-[50%] justify-center">
                        
                        <img className={isIntersecting ? 'rounded-lg opacity-100  animate-fade-right animate-duration-[3000ms]  ':' rounded-lg animate-fade animate-duration-[1000ms] animate-alternate-reverse animate-fill-both ' }   src={cliente} />
                    </div>

                    <div ref={element2} className=" flex flex-col w-[50%] justify-around ">
                        <h1 className={isIntersecting2 ? ' aboutUs text-5xl opacity-100 animate-fade-left animate-duration-[2000ms]':'aboutUs text-5xl animate-fade-down animate-duration-1000 animate-alternate-reverse animate-fill-both ' }>
                            A Few Words About Our Salon
                        </h1>
                        <p className={isIntersecting2 ? ' aboutUs text-xl opacity-100 animate-fade-left animate-duration-[3000ms] animate-delay-[500ms] ':'aboutUs text-xl animate-fade-down animate-duration-1000 animate-alternate-reverse animate-fill-both ' }>
                            In our exclusive high-end beauty salon, excellence and sophistication meet to provide you with a unique experience in the care and transformation of your image. Our space has been meticulously designed to offer an atmosphere of luxury and elegance in every detail.
                            <br /><br />
                            From the moment you enter our salon, you are immersed in a world of beauty and well-being. Our decoration, with its modern and carefully selected design, creates an atmosphere of serenity and refinement. Every element, from the designer furniture to the soft, cozy lighting, has been chosen to offer maximum comfort and satisfaction.
                        </p>
                    </div>

                </div>
            </div>


            <div className='  flex items-center justify-center h-96 bg-fixed bg-parallax bg-cover'>
                <h1 className=' text-5xl text-white uppercase' >
                    Customer service is a priority at our high-end salon
                </h1>

            </div>
            <div>
                <LittleOfUs />
            </div>
            <div className=' flex  justify-start h-96 bg-fixed bg-parallax2 bg-cover'>
                <div className="flex flex-col justify-center pl-10 gap-3 ">

                    <h1 className=' text-2xl text-white aboutUs' >
                        Customer service is a priority at our high-end salon
                    </h1>
                  
                    <button className="wrapper  rounded-xl ">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Explore all Services
                    </button>
                </div>

            </div>

            <div>
                <CardsHairdresser />
            </div>



        </>

    )
}

export default AboutUs