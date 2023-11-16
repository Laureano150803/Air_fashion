import React, { useState } from 'react';
import axios from 'axios';
import apiUrl from '../../api.js';
import showSwalAlert from '../showAlert.js';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../backgroundSlider.css';
import ClientsForm from './ClientsForm.jsx';
import '../TiltComponent.css';





export default function AppiomentClient() {
  const token = localStorage.getItem('token');
  const headers = { headers: { 'authorization': `Bearer ${token}` } };
  const navigate = useNavigate();
  const role = localStorage.getItem('role');
  const [isOpen, setIsOpen] = useState(false);

  function confirmAccount() {
    axios
      .get(apiUrl + 'google', headers)
      .then((res) => {
        showSwalAlert('success', 'Choose your appointment!');
        let url = res.data.redirect;

        // Abre una nueva ventana emergente con la URL
        window.open(url, 'popupWindow', 'width=600, height=800, scrollbars=yes');
      })
      .then(navigate('/appointment/new'))
      .catch((error) => {
        showSwalAlert('error', 'Something went wrong');
        navigate('/'); // Navega a la ruta '/appointment' en la misma ventana.
      });
  }


  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }



  return (
    <div>
      {role === '1' &&
        <div className="">
          <button className=" wrapper rounded" onClick={confirmAccount}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            make an appointment
          </button>
        </div>}

      {role === '0' &&
        <div className="">
          <button className="wrapper rounded" onClick={openModal}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            make an appointment
          </button>
          {isOpen && (
            <div className="flex justify-center items-center">
              <div className="inset-0 w-[45%] rounded-2xl bg-black bg-opacity-30 backdrop-blur-sm justify-center items-center">
                <div className="  p-5 flex justify-center items-center z-50">
                  <ClientsForm cerrar={closeModal} />
                </div>
              </div>
            </div>
          )}
        </div>
      }
      {!role &&
        <div className="">
          <button className="wrapper rounded" onClick={() => navigate('/signin')}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            make an appointment
          </button>
        </div>
      }
    </div>
  );
}
