import {createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../components/Register";
import Layout from '../layouts/Main'
import SignIn from "../components/SignIn";
import AppiomentClient from "../components/AppointMentClient";
import ClientsForm from "../components/ClientsForm";

import AboutUs from "../components/AboutUs";
const router = createBrowserRouter([
    {
      
      path: "/",  element: <Layout/>,
      children:[
        {path:"/" , element:<App/>},
        {path: "/register", element:<Register/>},
        {path: "/signin", element:<SignIn/>},
        {path: "/ClientsForm", element:<ClientsForm/>},
        { path: "/AboutUs" , element:<AboutUs/>},
        {path:"/appointment", element:<AppiomentClient/>},
      ]
    },
  ])

export default router