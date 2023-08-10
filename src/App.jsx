import { Link as Anchor } from "react-router-dom"

function App() {
  

  return (
    <>
      <div className='text-center flex justify-center w-full h-screen items-center'>
        <Anchor to={'/register'}><button className="border border-red-500 font-bold rounded-xl px-2 hover:bg-gray-200">Administra tu negocio!!</button></Anchor>
      </div>
    </>
  )
}

export default App
