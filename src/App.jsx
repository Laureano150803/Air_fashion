import { Link as Anchor } from "react-router-dom"
import Navbar from "./components/navbar"

function App() {

  return (
    <>
    <div>
      <Navbar/>
    </div>
      <div>
        <Anchor to={'/register'}>Registrate</Anchor>
      </div>

    </>
  )
}

export default App
