import React from 'react'
import logo from '../assets/images/logo.png'
import facebook from '../assets/images/facebook.png'
import insta from '../assets/images/instagram.png'
export default function Footer() {
    return (
        <>
            <div className='bg-[#0f172a] min-h-[10rem] text-white font-bold font-mono flex justify-evenly items-center flex-wrap'>
                <img className='w-40 h-20 p-4 ' src={logo} alt="BARBER" />
                <div className='text-center'>
                    <p>SOBRE NOSOTROS</p>
                    <p className='flex mt-3 w-[20rem]'>Nuestra peluqueria ofrece una gama completa de servicios de belleza</p>
                </div>
                <div className='text-center'>
                    <p>SIGUENOS</p>
                    <div className='flex mt-3 xsm:mb-2 xxsm:mb-2'>
                        <img className='w-[3rem] mr-2' src={facebook} />
                        <img className='w-[3rem] ' src={insta} />
                    </div>

                </div>
            </div>
            
        </>

    )
}
