import {createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../components/Register";
import Layout from '../layouts/Main'
import SignIn from "../components/SignIn";
import AppiomentClient from "../components/AppointMentClient";
import ClientsForm from "../components/ClientsForm";
import FormAppointment from "../components/FormAppoiment";
import AboutUs from "../components/AboutUs";
import DetailTypeService from "../components/DetailTypeService";
import Contact from "../components/Contact";
import AppoimennsTable from '../components/AppointmentsTable.jsx';
import ListHairdresser from "../components/ListHairdresser.jsx";
import CrudService from "../components/CrudService.jsx";
import PaymentApproveAndAppointment from "../components/PaymentApproveAndAppointment.jsx";
const router = createBrowserRouter([
    {
      
      path: "/",  element: <Layout/>,
      children:[
        {path:"/" , element:<App/>},
        {path: "/register", element:<Register/>},
        {path: "/signin", element:<SignIn/>},
        {path: "/ClientsForm", element:<ClientsForm/>},
        {path: "/AboutUs" , element:<AboutUs/>},
        {path: "/Contact" , element:<Contact/>},
        {path: "/CrudService" , element:<CrudService/>},
        {path: "/ListHairdresser" , element:<ListHairdresser/>},
        {path:"/appointment", element:<AppiomentClient/>},
        {path:"/appointmentsTable", element:<AppoimennsTable/>},
        {path:"/appointment/new", element:<FormAppointment/>},
        {path:"/detail/:id/:genero", element:<DetailTypeService/>},
        {path:"/your-appointment", element:<PaymentApproveAndAppointment/>}

      ]
    },
  ])

export default router