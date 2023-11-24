import React, { useState } from 'react'
import { useRef, useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../api'
import { gapi } from 'gapi-script'
import showSwalAlert from '../showAlert'
import { GoogleLogin } from 'react-google-login'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import soloSvg from '/src/assets/images/undraw_referral_re_0aji.svg'
import signup from '/src/assets/images/undraw_icons_wdp4.svg'
import fondo from '/src/assets/images/fonfo_formulario.jpg'

import '../TiltComponent.css'
import Register from '../components/Register'


export default function SignIn() {
  const [isOpen, setisOpen] = useState(false)

  function openPanel() {
    setisOpen(true)
  }
  function closePanel() {
    setisOpen(false)
  }




  let passwordConfirmation = useRef();
  const email = useRef();
  const password = useRef();
  const clientID = import.meta.env.VITE_CLIENT_ID;
  const navigate = useNavigate();

  useEffect(() => {
    const start = async () => {
      try {
        await gapi.auth2.init({
          client_id: clientID,
        });
      } catch (error) {
        console.error('Error initializing Google Auth:', error);
      }
    };

    gapi.load('client:auth2', start);
  }, [clientID]);

  const onSuccess = (response) => {
    const { email, googleId } = response.profileObj;
    let data = {
      email: email,
      password: googleId,
    };
    axios
      .post(apiUrl + 'users/signin', data)
      .then((res) => {
        const token = res.data.token;
        const role = res.data.user.role;
        const email = res.data.user.email;

        localStorage.setItem('token', token);
        localStorage.setItem('role', role);
        localStorage.setItem('email', email);
        showSwalAlert('success', 'Log In Successfully!');
        navigate('/');
      })
      .catch((err) => showSwalAlert('error', err.response.data.Response));
  };

  const onFailure = () => {
    console.log('something went wrong');
  };

  async function handleform(e) {
    e.preventDefault();
    const data = {
      email: email.current.value.toLowerCase(),
      password: password.current.value,
    };
    await axios
      .post(apiUrl + 'users/signin', data)
      .then((res) => {
        const token = res.data.token;
        const role = res.data.user.role;
        const email = res.data.user.email;

        localStorage.setItem('token', token);
        localStorage.setItem('role', role);
        localStorage.setItem('email', email);

        showSwalAlert('success', 'Log In Successfully!');
        navigate('/');
      })
      .catch((err) => showSwalAlert('error', err.response.data.Response));
  }

  return (
    <>
      <div className="">
        <div className="contain relative animate-fade-right animate-duration-[3000ms] animate-delay-150 animate-alternate  w-[100%] h-[100vh]  overflow-hidden "  >


          <div className='w-[100%] h-[100%]  flex justify-end'
            style={{

              backgroundImage: `url("${fondo}")`,
              backgroundSize: 'cover ',
              filter: 'blur(15px)'


            }}
          ></div>
        </div>

        <div className="froms-container absolute w-[100%] h-[100%] top-0 left-0 ">
          {!isOpen && (


            <div className="signin-signup container42 animate-fade-left animate-duration-[1000ms] animate-delay-150">
              <div className='borderLine42 flex justify-center items-center'></div>

              <form id='form' className=" z-20 flex h-auto" onSubmit={handleform}>

                <h2 className="title text-4xl text-css-h1 text-white p-5 z-10">Sign in</h2>

                <GoogleLogin
                  className="flex space-x-2 z-10 justify-center  items-end hover:scale-105 border border-gray-300 text-gray-600 py-2 transition duration-100 w-96 "
                  clientId={clientID}
                  buttonText="Sign In with Google"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy={"single_host_policy"}
                />
                <div className="flex justify-center items-center p-2 z-10 text-white ">
                  <p>OR</p>
                </div>
                <div className="  flex flex-col gap-7  ">

                  <div className="input-sing-in relative text-white ">
                    <div className="absolute inset-y-0 left-0 pl-2  flex items-center   pointer-events-none">

                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>

                    </div>

                    <input ref={email} className=" p-2 pl-10 text-lg text-white border border-gray-100 bg-gray-500/5 rounded-2xl w-96 h-14 font-serif z-10  placeholder-white outline-none" type="text" placeholder="E-mail" autoComplete="none" required />
                  </div>
                  <div className="input-sing-in relative text-white">
                    <div className="absolute inset-y-0 left-0 pl-2  flex items-center   pointer-events-none">

                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                      </svg>

                    </div>

                    <input ref={password} className=" p-2 pl-10 text-lg text-white border border-gray-100 bg-gray-500/5 rounded-2xl w-96 h-14 font-serif z-10  placeholder-white outline-none" type="password" placeholder="Password" required />
                  </div>
                </div>
                <button type="submit" className='container3 z-10 text-xl text-white mt-6 bg-transparent p-4 ' style={{ width: '384px' }}>
                  <span></span>
                  <div className='borderLine4 flex justify-center items-center'></div>
                  <h1 className='z-10 text-css'>

                    Sign in
                  </h1>
                </button>
              </form>

            </div>
          )}
          {isOpen && (

            <div
              style={{
                top: '30%',
                height: '65%'
              }}
              className="container42  signin-signup animate-fade-up animate-duration-[1000ms] animate-ease-in animate-fill-forwards">
              <div  className='borderLine42 flex justify-center items-center'></div>
              <Register goBack={closePanel}/>
            </div>
          )}
        </div>
        <div className="panels-container  ">

        {!isOpen &&(

          
          <div className="panel left-panel">
            <div className="content animate-rotate-y  animate-fill-forwards">

              <h3>New here ?</h3>
              <p>Welcome to Hair Fashion, a high-end hair salon that offers excellent services to treat your hair in the best way.

                If you don't have an account please create one here</p>

              <button onClick={openPanel} className=' bg-transparent rounded-3xl text-white h-10 font-bold border-4  w-32 '> Sign Up</button>
            </div>
            <img src={soloSvg} className='image animate-flip-up animate-duration-[2000ms]' />
          </div>
        )}

          {isOpen && (

          <div className="panel left-panel  ">
            <div className="content animate-jump-in animate-duration-1000 animate-fill-forwards">

              <h3>One of us?</h3>
              <p>Welcome to Hair Fashion, a high-end hair salon that offers excellent services to treat your hair in the best way.

                If you don't have an account please create one here</p>

            <button  onClick={closePanel} className='bg-transparent rounded-3xl text-white h-10 font-bold border-4 w-32'> Sign In</button>
            </div>
            <img src={signup} className='image animate-rotate-y animate-duration-1000 animate-fill-forwards'/>
          </div>
          )}

        </div>

      </div>

    </>

  )
}

