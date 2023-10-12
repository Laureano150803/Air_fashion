import React from 'react'
import { Link } from 'react-router-dom'

export default function NavbarMobile({ estado, backHome }) {
  const role = localStorage.getItem("role")
  return (
    <div className="animate-fade-right animate-once fixed top-0 left-0  xxsm:w-[50%] xsm:w-[70%] h-full bg-gray-800 text-white z-20 rounded-r-xl overflow-y-auto md:hidden">
      <div className="flex flex-col">
        <svg onClick={estado} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-2 mr-2 self-end">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>

      <div className="flex flex-col items-center justify-evenly h-full font-bold">
        <Link to="/" className="hover:text-violet-800 border-b-2 cursor-pointer transition duration-700 text-lg ">
          Home
        </Link>
        <Link to="/appointment" className="hover:text-violet-800 border-b-2 transition duration-700">
          Schedule Appointment
        </Link>
        <Link to="#" className="hover:text-violet-800 border-b-2 transition duration-700">
          Services
        </Link>
        <Link to="#" className="hover:text-violet-800 border-b-2 transition duration-700">
          About Us
        </Link>
        <Link to="#" className="hover:text-violet-800 border-b-2 transition duration-700">
          Contact
        </Link>
        {!role ? (
          <Link to="/signin" className="hover:text-violet-800 border-b-2 transition duration-700">
            Log In
          </Link>
        ) : ('')}
        {role ? (
          <div onClick={backHome} className="hover:text-violet-800 border-b-2 transition duration-700 ">
            Log Out
          </div>
        ) : ('')}
      </div>
    </div>
  )
}
