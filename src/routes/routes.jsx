import {createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../components/Register";
import Layout from '../layouts/Main'
import SignIn from "../components/SignIn";
import AppiomentClient from "../components/AppointMentClient";
const router = createBrowserRouter([
    {
      
      path: "/",  element: <Layout/>,
      children:[
        {path:"/" , element:<App/>},
        {path: "/register", element:<Register/>},
        {path: "/signin", element:<SignIn/>},
        {path:"/appointment", element:<AppiomentClient/>},
      ]
    },
  ])

export default router