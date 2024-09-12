import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png';
import logo3 from '../assets/images/logo2.png';
import { useState, useEffect } from "react";
import axios from "axios";
import apiUrl from '../../api.js';
import { useNavigate } from "react-router-dom";
import showSwalAlert from "../showAlert";
import NavbarMobile from './NavbarMobile';
import MyPendingAppointments from "./MyPendingAppointments.jsx";
import '../backgroundSlider.css';

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const headers = { headers: { 'authorization': `Bearer ${token}` } };

  const [onMyAppointments, setOnMyAppointments] = useState(false)

  function showMyAppointments() {
    setOnMyAppointments(true)
  }
  function cancelMyAppointments() {
    setOnMyAppointments(false)
  }


  const checkToken = async () => {
    try {
      await axios.get(apiUrl + 'auth', headers);
    } catch (error) {
      localStorage.clear();

      window.scrollTo(0, 100);

      await new Promise(resolve => setTimeout(resolve, 1000));

      window.scrollTo(0, 0);


    }
  };

  useEffect(() => {
    checkToken()
  }, [token]);


  const [option, setOption] = useState(false);

  function handleMenu() {
    setOption(!option);
  }


  const role = localStorage.getItem("role");
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
    if (window.scrollY >= 50) {
      setFix(true)
    } else {
      setFix(false)
    }

  }

  window.addEventListener("scroll", setFixed)
  return (
    <>

      <div className="sticky  z-50 top-0 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-60% bg-purple-500 to-90% text-white h-[4rem]">

        <div className={fix ? ' bg-white text-violet-500 flex w-[100%] h-[100%] border-4 border-b-indigo-500 ease-in-out duration-300' : 'flex w-[100%] h-[100%]'}>



          <div className="flex  w-[100%] h-[100%] xxsm:flex-row-reverse xsm:flex-row-reverse">
            <Link to={'/'} className="w-[20%] flex items-center justify-center xxsm:mr-3 xsm:mr-4 ">
              <img src={fix == true ? logo3 : logo} alt="logo" className={fix == true ? 'h-14 animate-rotate-x animate-duration-2000 ' : 'h-10 animate-jump-in animate-duration-1000 xsm:w-40 '} />
            </Link >
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
              {role === '1' && <Link to="/Diary" className="hover:text-violet-800 hover:border-b-2 transition duration-700">
                Check the Haidressers calendar
              </Link>}
              <Link to="/showServices" className="hover:text-violet-800 hover:border-b-2 transition duration-700">
                Services
              </Link>
              {role === '2' &&
                <Link to="/hairdresser" className="hover:text-violet-800 hover:border-b-2 transition text-black font-bold duration-700">
                  HairDresser Panel
                </Link>}
              {role === '3' &&
                <Link to="/adminPanel" className="hover:text-violet-800 hover:border-b-2 transition text-black font-bold duration-700">
                  Admin Panel
                </Link>}
              <Link to="/AboutUs" className="hover:text-violet-800 hover:border-b-2 transition duration-700">
                About us
              </Link>
              {role !== '2' && role !== '3' ? (
                <Link to="/Contact" className="hover:text-violet-800 hover:border-b-2 transition duration-700">
                  Contact
                </Link>
              ) : ''}
              {!role ? (
                <Link to="/signin" className="hover:text-violet-800 hover:border-b-2 transition duration-700">
                  Log In
                </Link>
              ) : ('')}
              {role ? (
                <div onClick={backHome} className="flex hover:text-violet-800 hover:border-b-2 transition duration-700 cursor-pointer">
                  Log Out
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                  </svg>

                </div>
              ) : ('')}

              {role === '1' &&
                <div>
                  <svg onClick={showMyAppointments} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer hover:scale-125 duration-150">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                  </svg>

                </div>}


              {onMyAppointments && <MyPendingAppointments close={cancelMyAppointments} />}
            </div>
            {option && (<NavbarMobile backHome={backHome} estado={handleMenu} />)}
          </div>
        </div>
      </div>
    </>
  )
}

