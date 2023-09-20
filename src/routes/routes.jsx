import {createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../components/Register";
import Layout from '../layouts/Main'
import SignIn from "../components/SignIn";
const router = createBrowserRouter([
    {
      path: "/",   element: <Layout/>,
      children:[
        {path: "/register", element:<Register/>},
        {path: "/signin", element:<SignIn/>}
      ]
    },
  ])

export default router