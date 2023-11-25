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
import HairDresserPanel from "../components/HairDresserPanel.jsx";
import Diary from "../components/Diary.jsx";
import Statistics from "../components/Statistics.jsx";
import ShowAllServices from "../components/ShowAllServices.jsx";
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
        {path: "/Diary" , element:<Diary/>},
        {path:"/appointment", element:<AppiomentClient/>},
        {path:"/showServices", element:<ShowAllServices/>},
        {path:"/appointmentsTable", element:<AppoimennsTable/>},
        {path:"/appointment/new", element:<FormAppointment/>},
        {path:"/detail/:id/:genero", element:<DetailTypeService/>},
        {path:"/your-appointment", element:<PaymentApproveAndAppointment/>},
        {path:"/hairdresser", element:<HairDresserPanel/>},
        {path:"/statistics", element:<Statistics/>}

      ]
    },
  ])

export default router