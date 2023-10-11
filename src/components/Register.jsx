import axios from "axios"
import { useRef, useEffect } from "react"
import apiUrl from "../../api"
import { gapi } from "gapi-script"
import Swal from "sweetalert2"
import { GoogleLogin } from 'react-google-login'
import { Link } from "react-router-dom"
export default function Register() {
  let email = useRef()
  let password = useRef()

  const clientID = import.meta.env.VITE_CLIENT_ID

  useEffect(() => {
    const start = () => {
      gapi.auth2.init({
        clientId: clientID
      })
    }

    gapi.load("client:auth2", start)
  }, [])

  //funcion para manejar la alerta
  const showSwalAlert = (icon, title) => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 4000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      }
    });
    Toast.fire({
      icon: icon,
      title: title,
      confirmButtonText: 'Ok!'
    });
  };

  const onSuccess = (response) => {
    // console.log(response)
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
  async function handleform(e) {
    e.preventDefault()
    const data = {
      email: email.current.value,
      password: password.current.value
    }
    await axios.post(apiUrl + 'users/signup', data)
    .then(res => showSwalAlert('success', 'Sign Up Successfully!'))
    .catch(err => showSwalAlert('error', err.response.data.Response))
  }
  return (
    <>
      <div className="w-full min-h-[90vh] flex justify-center items-center bg-slate-100">
        <form className="flex flex-col" onSubmit={handleform}>
          <GoogleLogin
            className="flex space-x-2 justify-center items-end hover:scale-105 border border-gray-300 text-gray-600 py-2 transition duration-100 w-[20rem]"
            clientId={clientID}
            buttonText="Sign up with Google"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_policy"}
          />
          <div className="flex justify-center my-4">
            <p>OR</p>
          </div>

          <input ref={email} className="border border-slate-300 rounded-sm w-[20rem]  h-10 mb-4 outline-none" type="text" placeholder="E-mail" autoComplete="none"  required/>
          <input ref={password} className="border border-slate-300 rounded-sm w-[20rem] h-10 outline-none" type="password" placeholder="Password" required />
          <div className=" text-center mt-2">
            <p>Already a member?<Link to={'/signin'} className="font-bold hover:border-b-2 border-black  ">Log In</Link></p>
            <input type="submit" className="bg-gray-800 cursor-pointer text-gray-50 font-bold mt-4 py-2 px-20 rounded-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" value="Sign Up" />
          </div>
        </form>
      </div>
    </>
  )
}
