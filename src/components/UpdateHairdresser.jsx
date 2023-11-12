import axios from 'axios'
import apiUrl from '../../api'
import { useRef } from 'react'
export const UpdateHairdresser = ({close, id}) => {
  let name = useRef()
  let lastName = useRef()
  let phone = useRef()
  let ID = useRef()
  let photo = useRef()
  console.log(id)

  function edictHairdresser(e){
    const token = localStorage.getItem("token");
    const headers = { headers: { 'authorization': `Bearer ${token}` } };
    e.preventDefault()
    const data = new FormData()
    data.append('nombre', name.current.value)
    data.append('apellido', lastName.current.value)
    data.append('telefono', phone.current.value)
    data.append('foto', photo.current.files[0])
    data.append('cedula', ID.current.value)
    axios.patch(apiUrl + `peluqueros/${id}`, data,headers ).then(res =>console.log(res)).catch(res=>console.log(res))

}
  return (
    <div>
      <div onClick={close} className='cursor-pointer'>
        X
      </div>
        <form className='flex flex-col'>
            <input ref={name} type="text" placeholder='Nombre' />
            <input ref={lastName} type="text" placeholder='Apellido'/>
            <input ref={ID} type="text" placeholder='Cedula'/>
            <input ref={photo} type="file" placeholder='Foto' />
            <input ref={phone} type="text" placeholder='Telefono'/>
            <input type="submit" value="Update" onClick={edictHairdresser} />
        </form>

    </div>
  )
}
