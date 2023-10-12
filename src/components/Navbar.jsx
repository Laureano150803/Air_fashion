import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png';
import logo3 from '../assets/images/logo2.png';
import { useState } from "react";
import axios from "axios";
import apiUrl from '../../api.js';
import { useNavigate } from "react-router-dom";
import showSwalAlert from "../showAlert";
import NavbarMobile from './NavbarMobile';
import '../backgroundSlider.css';

export default function Navbar() {
  const [option, setOption] = useState(false);

  function handleMenu() {
    setOption(!option);
  }

  const navigate = useNavigate();
  const role = localStorage.getItem("role");
  const token = localStorage.getItem("token");
  const headers = { headers: { 'authorization': `Bearer ${token}` } };

  function backHome() {
    axios.post(apiUrl + 'users/signout', null, headers)
      .then(res => {
        localStorage.clear();
        showSwalAlert('success', 'You have logged out');
        navigate('/');
      })
      .catch(err => alert(err));
  }

  const [fix, setFix] = useState(false)

  function setFixed() {
    if (window.scrollY >= 392) {
      setFix(true)
    } else {
      setFix(false)
    }

  }

  window.addEventListener("scroll", setFixed)
  return (
    <>

      <div className="sticky  z-50 top-0 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-60% bg-purple-500 to-90% text-white h-[4rem]">

        <div className={fix ? 'bg-white text-violet-500 flex w-[100%] h-[100%] border-4 border-b-indigo-500 ease-in-out duration-300' : 'flex w-[100%] h-[100%]'}>



          <div className="flex  w-[100%] h-[100%] xxsm:flex-row-reverse xsm:flex-row-reverse">
            <div className="w-[20%] flex items-center justify-center xxsm:mr-3 xsm:mr-4 ">
              <img src={fix == true ? logo3 : logo} alt="logo" className={fix == true ? 'h-14 animate-rotate-x animate-duration-2000 ' : 'h-10 animate-jump-in animate-duration-1000 xsm:w-40 '} />
            </div>
            {/* Botón de menú para dispositivos móviles */}
            <div className="w-[72%] flex items-center  xxsm:mr-3 xsm:mr-3 md:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" onClick={handleMenu} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </div>

            {/* Navegación para dispositivos más grandes */}
            <div className="w-[60%] items-center justify-evenly flex flex-wrap text-css-h1 xxsm:hidden xsm:hidden">
              <Link to="/" className="hover:text-violet-800 hover:border-b-2 cursor-pointer transition duration-700">
                Home
              </Link>
              <Link to="/appointment" className="hover:text-violet-800 hover:border-b-2 transition duration-700">
                Schedule appointment
              </Link>
              <Link to="#" className="hover:text-violet-800 hover:border-b-2 transition duration-700">
                Services
              </Link>
              <Link to="#" className="hover:text-violet-800 hover:border-b-2 transition duration-700">
                About us
              </Link>
              <Link to="#" className="hover:text-violet-800 hover:border-b-2 transition duration-700">
                Contact
              </Link>
              {!role ? (
                <Link to="/signin" className="hover:text-violet-800 hover:border-b-2 transition duration-700">
                  Log In
                </Link>
              ) : ('')}
              {role ? (
                <div onClick={backHome} className="hover:text-violet-800 hover:border-b-2 transition duration-700 cursor-pointer">
                  Log Out
                </div>
              ) : ('')}
            </div>
            {/* Navegación móvil (condicional) */}
            {option && (<NavbarMobile backHome={backHome} estado={handleMenu} />)}
          </div>
        </div>
      </div>  
      </>
      )
}

