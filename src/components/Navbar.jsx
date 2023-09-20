import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png'
import { useState } from "react";
import NavbarMobile from "./NavbarMobile";
import axios from "axios";
import apiUrl from '../../api.js'
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  let [option, setOption] = useState(false)
  function handleMenu() {
    setOption((prevOption) => !prevOption);
  }
  const navigate = useNavigate()
  const role = localStorage.getItem("role")
  const token = localStorage.getItem("token")
  let headers = { headers: { 'authorization': `Bearer ${token}` } }
  function backHome() {
    axios.post( apiUrl + 'users/signout', null, headers)
      .then(res => {
        localStorage.clear();
        navigate('/')
      })
      .catch(err => alert(err))
  }
  return (
    <>
      <div className="sticky top-0 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-60% bg-purple-500 to-90% text-white flex justify-between flex-wrap items-center xsm:justify-evenly  ">
        <svg  onClick={handleMenu} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 cursor-pointer  md:hidden xxsm:hidden">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        {option ? (<NavbarMobile estado={handleMenu}/>) : ('')}
        <div >
          <img src={logo} alt="logo" className="w-40 p-4 ms-20" />
        </div>
        <div className=" flex items-center justify-end xsm:hidden">
          <div className=" h-20"></div>
          <div className="flex space-x-8 flex-wrap jus mr-20 text-lg " >
            <Link to="/" className="" >
              <p className="hover:text-violet-800 hover:border-b-2 cursor-pointer transition duration-700 ">
                Home
              </p >
            </Link>

            <Link to="#"   >
              <p className="hover:text-violet-800 hover:border-b-2 transition duration-700  ">
                Schedule appointment
              </p >
            </Link>

            <Link to="#"   >
              <p className="hover:text-violet-800 hover:border-b-2 transition duration-700 ">
                Services
              </p >
            </Link>

            <Link to="#"   >
              <p className="hover:text-violet-800 hover:border-b-2 transition duration-700 ">
                About us
              </p >
            </Link>

            <Link to="#"   >
              <p className="hover:text-violet-800 hover:border-b-2 transition duration-700 ">
                Contact
              </p >
            </Link>
            {!role ? (<Link to="/signin"   >
              <p className="hover:text-violet-800 hover:border-b-2 transition duration-700 ">
                Log In
              </p >
            </Link>):('')}
            {role? (<div onClick={backHome}   >
              <p className="hover:text-violet-800 hover:border-b-2 transition duration-700 cursor-pointer ">
                Log Out
              </p >
            </div>):('')}
            
            
          </div>
        </div>
        <div className="flex items-center xsm:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          <p className="hover:text-violet-800 transition duration-700 cursor-default">+57 (350) 2246718</p>
        </div>

      </div>
    </>
  )
}
