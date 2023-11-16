import React, { useState } from 'react'
import logo from '/src/assets/images/logo2.png'
import '../backgroundSlider.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  const [open, setopen] = useState(false)


  return (
    <>
      <div className='flex '>
        <div className={`${open ? "w-72" : "w-24"} duration-300 p-5 pt-8 h-screen bg-slate-100 relative`}>

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            className={`w-8 h-8 absolute cursor-pointer rounded-full -right-3 top-9 border-2  ${!open && "rotate-180 text-violet-800"}`}
            onClick={() => setopen(!open)}
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
          </svg>
          <div className="flex flex-col gap-6 ">

            <div className="flex gap-x-4 items-center  ">
              <img src={logo} className={`cursor-pointer duration-500 w-10 h-10`} />
              <h1 className={`${!open && 'scale-0'} origin-left text-css-h1 text-xl duration-300 text-violet-600`}>Hair Fashion</h1>
            </div>
            <div className="flex flex-col gap-2">


              <Link to={'/ListHairdresser'} className="flex gap-x-4 items-center  hover:text-violet-600 h-14 rounded-2xl hover:bg-slate-200 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 ml-3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>

                <a className={`${!open && 'hidden'} origin-left  text-lg duration-200 font-bold `}>Team</a>

              </Link>

              <Link to={'/CrudService'} className="flex gap-x-4 items-center  hover:text-violet-600 h-14 rounded-2xl hover:bg-slate-200 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 ml-3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                </svg>

                <a className={`${!open && 'hidden'} origin-left  text-lg duration-200 font-bold `}>services</a>

              </Link>

              <Link to={'/'} className="flex gap-x-4 items-center  hover:text-violet-600 h-14 rounded-2xl hover:bg-slate-200 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 ml-3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                </svg>


                <a className={`${!open && 'hidden'} origin-left  text-lg duration-200 font-bold `}>calendar</a>

              </Link>
            </div>

          </div>



        </div>
        <div className=" p-7 text-2xl font-semibold flex-1 h-screen">
          <h1>hola mundo </h1>
        </div>
      </div>
    </>
  )
}

export default Sidebar