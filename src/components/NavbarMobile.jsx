import React from 'react'
import { Link } from 'react-router-dom'

export default function NavbarMobile({ estado }) {
    const role = localStorage.getItem("role")
    return (
        <div className="absolute top-0 left-0  w-[50%] h-full  font-bold  bg-black flex flex-col rounded-r-lg md:hidden xxsm:hidden">
            <svg onClick={estado} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 border bg-black">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
            </svg>
            <div className="flex items-center h-[100%] flex-col text-lg " >
                <Link to="/" className="mt-5" >
                    <p className="hover:text-violet-800 hover:border-b-2 cursor-pointer transition duration-700 ">
                        Home
                    </p >
                </Link>


                <Link to="#" className='mt-5'  >
                    <p className="hover:text-violet-800 hover:border-b-2 transition duration-700 ">
                        Services
                    </p >
                </Link>

                <Link to="#" className='mt-5'  >
                    <p className="hover:text-violet-800 hover:border-b-2 transition duration-700 ">
                        About us
                    </p >
                </Link>

                <Link to="#" className='mt-5' >
                    <p className="hover:text-violet-800 hover:border-b-2 transition duration-700 ">
                        Contact
                    </p >
                </Link>
                {!role ? (<Link to="/signin"   >
                    <p className="hover:text-violet-800 hover:border-b-2 transition duration-700 ">
                        Log In
                    </p >
                </Link>) : ('')}
                {role ? (<div onClick={backHome}   >
                    <p className="hover:text-violet-800 hover:border-b-2 transition duration-700 cursor-pointer ">
                        Log Out
                    </p >
                </div>) : ('')}
            </div>
        </div>
    )
}
