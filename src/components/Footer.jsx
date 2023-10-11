import React, { useEffect } from 'react'
import logo from '../assets/images/logo.png'
import facebook from '../assets/images/facebook.png'
import insta from '../assets/images/instagram.png'
import { useSelector, useDispatch } from 'react-redux'
import all_services from '../store/actions/allServices'
const { service_all } = all_services
export default function Footer() {
    const services_all = [...useSelector(store => store.service_all.services)]
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(service_all())
    }, [])
    console.log(typeof (services_all))
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
                {services_all.map((service) => (
                    <div key={service._id}>
                        <p>{service.titulo}</p>
                        <p>{service.nombre}</p>
                        <p>{service.descripcion}</p>
                        <p>{service.precio}</p>
                    </div>
                ))}
            </div>
        </>

    )
}
