import axios from "axios"
import { useRef } from "react"
import apiUrl from "../../api"

export default function Register() {

  let email = useRef()
  let password = useRef()

  async function handleform(e){
    e.preventDefault()
    
    const data={
      email:email.current.value,
      password:password.current.value
    }
    await axios.post(apiUrl+'users/signup',data).then(res => console.log(res)).catch(res => console.log(res.response.data.Response)) 
    
  }
  


  return (
    <>
    <div className="w-full h-screen flex justify-center items-center">
        <form className="flex flex-col">
          <label htmlFor="correo">Digita correro</label>
           <input ref={email} className="border border-black rounded-md" type="text" id="correo" />
           <label htmlFor="pass">Digita contraseña</label>
           <input ref={password} className="border border-black rounded-md" type="password" id="pass" />
           <button onClick={handleform}>Enviar datos</button>
        </form> 
    </div>
    </>
  )
}
