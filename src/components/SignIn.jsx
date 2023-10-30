
import { useRef, useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../api'
import { gapi } from 'gapi-script'
import showSwalAlert from '../showAlert'
import {GoogleLogin} from 'react-google-login'
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

    const {email,googleId } = response.profileObj;
    let data = {
      email: email,
      password: googleId,
    }
    axios.post(apiUrl + 'users/signin', data)
      .then(res =>{
        const token = res.data.token
        const role = res.data.user.role
        const email = res.data.user.email
  
        localStorage.setItem("token", token)
        localStorage.setItem("role", role)
        localStorage.setItem("email", email)
        showSwalAlert('success', 'Log In Successfully!')
        navigate('/')}
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
    .then(res =>{
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
     <div className="w-full min-h-[90vh] flex justify-center items-center bg-slate-100">

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

          <input ref={email} className="border border-slate-300 rounded-sm w-[20rem]  h-10 mb-4 outline-none" type="text" placeholder="E-mail" autoComplete="none" required/>
          <input ref={password} className="border border-slate-300 rounded-sm w-[20rem] h-10 outline-none" type="password" placeholder="Password" required />
          <div className=" text-center mt-2">
            <p>Create account <Link to={'/ClientsForm'} className="font-bold hover:border-b-2 border-black  ">Here</Link></p>
            <input type="submit" className="bg-gray-800 cursor-pointer text-gray-50 font-bold mt-4 py-2 px-20 rounded-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" value="Log In" />
          </div>
        </form>
      </div>
    </>
    
  )
}
