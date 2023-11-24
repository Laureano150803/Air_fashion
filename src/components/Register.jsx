import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useRef, useEffect } from "react"
import apiUrl from "../../api"
import { gapi } from "gapi-script"
import showSwalAlert from "../showAlert"
import { GoogleLogin } from 'react-google-login'
import { Link } from "react-router-dom"
import ClientsForm from '../components/ClientsForm'
import Swal from "sweetalert2"

export default function Register({goBack}) {

  let email = useRef()
  let password = useRef()
  let passwordConfirmation = useRef()

  const clientID = import.meta.env.VITE_CLIENT_ID

  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        clientId: clientID
      })
    }

    gapi.load("client:auth2", start)
  }, [])


  const onSuccess = (response) => {
 
    const {email,googleId } = response.profileObj;
    let data = {
      email: email,
      password: googleId,
    }
    axios.post(apiUrl + 'users/signup', data)
      .then(res => showSwalAlert('success', 'Sign Up Successfully!'))
      .catch(err => showSwalAlert('error', err.response.data.Response))

  }
  const onFailure = () => {
    console.log("something went wrong");
  }
  const navegate = useNavigate()
  async function handleform(e) {
    e.preventDefault()
    const enteredPassword =password.current.value
    const confirmationPassword = passwordConfirmation.current.value
    
    if (enteredPassword !== confirmationPassword) {
      Swal.fire('Error','your password does not match', 'error' )
    }else{

      const data = {
        email: email.current.value.toLowerCase(),
        password: enteredPassword
      }
      await axios.post(apiUrl + 'users/signup', data)
      .then(res =>{
        showSwalAlert('success','Sign Up Successfully!') 
        goBack()

      })
      .catch(err => showSwalAlert('error', err.response.data.Response))
    }
  }
  return (
    <>

      <div className="w-full flex justify-center items-center h-full ">
      <form className="singn-up-form  flex items-center justify-centern flex-col" onSubmit={handleform}>
              <h2 className="title text-4xl text-css-h1 text-white mb-3 z-10 p-2">Sign up</h2>

              <GoogleLogin
                className="flex z-20 space-x-2 justify-center rounded-xl items-end hover:scale-105 border border-gray-300 text-gray-600 py-2 transition duration-100 w-[384px]"
                clientId={clientID}
                buttonText="Sign In with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={"single_host_policy"}
              />
              <div className="flex justify-center items-center z-10 text-white p-3">
                <p>OR</p>
              </div>
              <div className=" p-3 flex flex-col gap-7  ">

                <div className="input-sing-in relative text-white ">
                  <div className="absolute inset-y-0 left-0 pl-2  flex items-center   pointer-events-none">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>

                  </div>

                  <input ref={email} className="block p-2 pl-10 text-lg text-white z-20 border border-gray-300 bg-gray-500/5 rounded-2xl w-96 h-14 font-serif     placeholder-white outline-none" type="text" placeholder="E-mail" autoComplete="none" required />
                </div>
                <div className="input-sing-in relative text-white">
                  <div className="absolute inset-y-0 left-0 pl-2  flex items-center   pointer-events-none">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>

                  </div>

                  <input ref={password} className="block p-2 pl-10 text-lg text-white z-20 border border-gray-300 bg-gray-500/5 rounded-2xl w-96 h-14 font-serif  placeholder-white    outline-none" type="password" placeholder="Password" required />
                </div>
                <div className="input-sing-in relative text-white">
                  <div className="absolute inset-y-0 left-0 pl-2  flex items-center   pointer-events-none">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>

                  </div>

                  <input ref={passwordConfirmation} className="block p-2 pl-10 text-lg text-white z-20 border border-gray-300 bg-gray-500/5 rounded-2xl w-96 h-14 placeholder-white  font-serif    outline-none" type="password" placeholder="Confirm Password" required />
                </div>
              </div>
              <button type="submit" className='container3 z-10 text-xl text-white mt-6 bg-transparent p-4 ' style={{ width: '384px' }}>
                  <span></span>
                  <div className='borderLine4 flex justify-center items-center'></div>
                  <h1 className='z-10 text-css'>

                    Sign Up
                  </h1>
                </button>
            </form>
      </div>
    </>
  )
}

        