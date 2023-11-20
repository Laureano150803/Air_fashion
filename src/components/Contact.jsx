import React from 'react'
import '../backgroundSlider.css';
import contact from '/src/assets/images/local7.png'
import email from '/src/assets/images/email.png'
import telefono from '/src/assets/images/telefono.png'
import useIntersection from './useIntersection';

const Contact = () => {
    const [element , isIntersecting]= useIntersection({
        threshold:1,
    });
    const [element2 , isIntersecting2]= useIntersection({
        threshold:1,
    });
    return (
        <>
            <div className="bg-transparent bg-opacity-0 h-auto w-auto flex items-center">
                <div className="">

                    <p className='aboutUs text-gray-100 text-[12rem] z-10 pl-8  xxsm:text-[10rem]'>
                        Contact
                    </p>

                    <div className="flex flex-col justify-between z-40 items-center  -translate-y-44 -translate-x-10 ">

                        <h3 className='text-css-h1 text-sm  text-gray-400  '>
                            Home / Contact
                        </h3>

                        <h1 className=' aboutUs text-5xl text-black '>
                            Contact
                        </h1>
                    </div>
                </div>

            </div>
            <div className=" flex flex-col justify-evenly">
                <div className="aboutUs flex items-center  mb-10 ">
                    <h1 className='text-5xl '>Our Location</h1>
                </div>

                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7847.942710503566!2d-75.55590805908382!3d10.423847708817025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef62f9fddbcfd2f%3A0xba9c2d533159ed37!2sEl%20Centro%2C%20Cartagena%20de%20Indias%2C%20Provincia%20de%20Cartagena%2C%20Bol%C3%ADvar!5e0!3m2!1ses-419!2sco!4v1698903136425!5m2!1ses-419!2sco" width="100%" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
 
                <div ref={element} className=" flex w-[100%] justify-around mt-10">
                    <div className="w-[30%] flex flex-col">
                        <h1 className={isIntersecting ? ' aboutUs mb-3 text-3xl animate-fade-right animate-duration-[2000ms]':'aboutUs mb-3 text-3xl animate-flip-up animate-duration-[2000ms] animate-reverse '}>Get in Touch with Us</h1>
                        <p className={isIntersecting ? ' aboutUs  text-lg animate-fade-right animate-duration-[2000ms] animate-delay-75':'aboutUs  text-lg animate-flip-up animate-duration-[2000ms] animate-reverse '}>For us it is important to have excellent customer service and give the greatest importance to all your needs and we understand our clients so much that we decided to set up this hair salon in the center of the city. Being located in the city center, Hair fashion will be more accessible to a wide range of customers. People who live, work or visit the area will have easy access to its services.</p>
                        <div className="aboutUs ">
                            <h1 className={isIntersecting? 'text-2xl mt-5 mb-5 animate-fade-right animate-duration-[2000ms] ':'text-2xl mt-5 mb-5 animate-fade-down animate-duration-1000 animate-alternate-reverse opacity-0'} >Contact Information</h1>
                            <div className="flex gap-5 flex-wrap  flex-col ">
                                <div className={isIntersecting?'flex gap-3 items-center hover:text-cyan-400 animate-fade-right animate-duration-[3000ms]':'flex gap-3 items-center opacity-0 hover:text-cyan-400'}>

                                    <img src={contact} className='h-10 w-12 ' />
                                    <h1 className='text-lg'>Cl. 24 #8A-344, Getsemaní, Cartagena de Indias,Bolívar</h1>
                                </div>
                                <div className={isIntersecting?'flex gap-3 items-center hover:text-cyan-400 animate-fade-right animate-duration-[3000ms] animate-delay-500':'flex gap-3 opacity-0 items-center hover:text-cyan-400'}>

                                    <img src={telefono} className='h-10 w-12' />
                                    <h1 className='text-lg'>+57 (350) 2246 718</h1>
                                </div>
                                <div className={isIntersecting?'flex gap-3 items-center  animate-fade-right animate-duration-[3000ms] animate-delay-700':'flex gap-3 items-center opacity-0 '}>

                                    <img src={email} className='h-10 w-12 ' />
                                    <h1 className='text-cyan-400 text-lg'>Hairfashion1526@gmail.com</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div ref={element2} className="">
                        <form className={isIntersecting2?'w-full max-w-lg mb-10 animate-fade-left animate-once animate-duration-[2000ms]':'opacity-0'} >
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                                        First Name
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane" />
                                    <p className=" text-xs italic">Please fill out this field.</p>
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                        Last Name
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                        E-mail
                                    </label>
                                    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" />
                                    <p className="text-gray-600 text-xs italic">Some tips - as long as needed</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                        Message
                                    </label>
                                    <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
                                </div>
                            </div>
                            <div className="md:flex md:items-center">
                                <div className="md:w-1/3">
                                    <button className="shadow bg-cyan-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                                        Send
                                    </button>
                                </div>
                                <div className="md:w-2/3"></div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact