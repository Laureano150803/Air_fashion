import { Link as Anchor } from "react-router-dom"
import HomeCarrucel from "./components/HomeCarrucel"
import './app.css'


function App() {

  return (
    <>
    <div className="App">
      <HomeCarrucel/>
    </div>


      <div>

        <Anchor to={'/register'}>Registrate</Anchor>
      </div>

    </>
  )
}

export default App
