import {createBrowserRouter } from "react-router-dom";
import Register from "../components/Register";
import Layout from '../layouts/Main'
import SignIn from "../components/SignIn";
import AppiomentClient from "../components/AppiomentClient";
const router = createBrowserRouter([
    {
      path: "/",   element: <Layout/>,
      children:[
        {path: "/register", element:<Register/>},
        {path: "/signin", element:<SignIn/>},
        {path:"/appoiment", element:<AppiomentClient/>}
      ]
    },
  ])

export default router