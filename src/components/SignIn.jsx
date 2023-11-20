import React from 'react'
import { useRef, useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../api'
import { gapi } from 'gapi-script'
import showSwalAlert from '../showAlert'
import { GoogleLogin } from 'react-google-login'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export default function SignIn() {
  const email = useRef()
  const password = useRef()
  const clientID = import.meta.env.VITE_CLIENT_ID
  const navigate = useNavigate()

  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        clientId: clientID
      })
    }

    gapi.load("client:auth2", start)
  }, [])


  const onSuccess = (response) => {

    const { email, googleId } = response.profileObj;
    let data = {
      email: email,
      password: googleId,
    }
    axios.post(apiUrl + 'users/signin', data)
      .then(res => {
        const token = res.data.token
        const role = res.data.user.role
        const email = res.data.user.email

        localStorage.setItem("token", token)
        localStorage.setItem("role", role)
        localStorage.setItem("email", email)
        showSwalAlert('success', 'Log In Successfully!')
        navigate('/')
      }
      )
      .catch(err => showSwalAlert('error', err.response.data.Response))

  }

  const onFailure = () => {
    console.log("something went wrong");
  }
  async function handleform(e) {
    e.preventDefault()
    const data = {
      email: email.current.value,
      password: password.current.value
    }
    await axios.post(apiUrl + 'users/signin', data)
      .then(res => {
        const token = res.data.token
        const role = res.data.user.role
        const email = res.data.user.email

        localStorage.setItem("token", token)
        localStorage.setItem("role", role)
        localStorage.setItem("email", email)

        showSwalAlert("success", "Log In Successfully!")
        navigate('/')
      })
      .catch(err => showSwalAlert('error', err.response.data.Response))
  }
  return (
    <>
      <div className="contain relative  w-[100%] h-[100vh] bg-white overflow-hidden ">

        <div className="froms-container absolute w-[100%] h-[100%] top-0 left-0 ">
          <div className="signin-signup">
            <form action="" className="singn-in-form flex items-center justify-centern flex-col" onSubmit={handleform}>
              <h2 className="title text-4xl text-css-h1 text-black mb-3 ">Sign in</h2>

                <GoogleLogin
                  className="flex space-x-2 justify-center rounded-xl items-end hover:scale-105 border border-gray-300 text-gray-600 py-2 transition duration-100 w-[20rem]"
                  clientId={clientID}
                  buttonText="Sign In with Google"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy={"single_host_policy"}
                />
                <div className="flex justify-center items-center ">
                  <p>OR</p>
                </div>
              <div className=" p-3 flex flex-col gap-7  ">

                <div className="input-sing-in relative text-gray-400 ">
                  <div className="absolute inset-y-0 left-0 pl-2  flex items-center   pointer-events-none">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>

                  </div>

                  <input ref={email} className="block p-2 pl-10 text-lg text-gray-900 border border-gray-300 bg-gray-500/5 rounded-2xl w-96 h-14 font-serif    outline-none" type="text" placeholder="E-mail" autoComplete="none" required />
                </div>
                <div className="input-sing-in relative text-gray-400">
                  <div className="absolute inset-y-0 left-0 pl-2  flex items-center   pointer-events-none">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>

                  </div>

                  <input ref={password} className="block p-2 pl-10 text-lg text-gray-900 border border-gray-300 bg-gray-500/5 rounded-2xl w-96 h-14 font-serif    outline-none" type="password" placeholder="Password" required />
                </div>
              </div>
                <input type="submit" className="bg-gray-800 cursor-pointer text-gray-50 font-bold mt-4 py-2 px-20 rounded-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" value="Log In" />

            </form>
            <div className=" text-center mt-2">
         <p>Create account <Link to={'/register'} className="font-bold hover:border-b-2 border-black  ">Here</Link></p>
       </div>
          </div>
        </div>
        <div className="panels-container"></div>

      </div>

    </>

  )
}

{/* <div className="w-full min-h-[90vh] flex justify-center items-center bg-slate-100">

     <form className="flex flex-col" onSubmit={handleform}>
       <GoogleLogin
         className="flex space-x-2 justify-center items-end hover:scale-105 border border-gray-300 text-gray-600 py-2 transition duration-100 w-[20rem]"
         clientId={clientID}
         buttonText="Sign In with Google"
         onSuccess={onSuccess}
         onFailure={onFailure}
         cookiePolicy={"single_host_policy"}
       />
       <div className="flex justify-center my-4">
         <p>OR</p>
       </div>

       
       <div className=" text-center mt-2">
         <p>Create account <Link to={'/register'} className="font-bold hover:border-b-2 border-black  ">Here</Link></p>
       </div>
     </form>
   </div> */}