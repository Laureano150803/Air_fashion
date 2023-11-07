import React, { useState } from 'react';
import axios from 'axios';
import apiUrl from '../../api.js';
import showSwalAlert from '../showAlert.js';
import { useNavigate } from 'react-router-dom';
import { headers } from '../headers.js';
import { Link } from 'react-router-dom';
import '../backgroundSlider.css';
import ClientsForm from './ClientsForm.jsx';

export default function AppiomentClient() {
  const navigate = useNavigate();
  const role = localStorage.getItem('role');
  const [isOpen, setIsOpen] = useState(false);

  function confirmAccount() {
    axios
      .get(apiUrl + 'google', headers)
      .then((res) => {
        showSwalAlert('success', 'Choose your appointment!');
        let url = res.data.redirect;
        window.location.href = url;
      })
      .catch((error) => {
        showSwalAlert('error', 'Something went wrong');
        navigate('/appointment'); // Navega a la ruta '/appointment' en la misma ventana.
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
      {role === '1' ? (
        <div className="">
          <button className=" wrapper rounded" onClick={confirmAccount}>
          <span></span>
            <span></span>
            <span></span>
            <span></span>
            make an appointment
          </button>
        </div>
      ) : (
        <div className="">
          <button className="wrapper rounded" onClick={openModal}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            make an appointment
          </button>
          {isOpen && (
            <div className="modal-overlay">
              <div className="modal">
                <button className="close-button" onClick={closeModal}>X</button>
                <h1>Modal Content</h1>
                <div className="bg-white p-5 flex justify-center items-center z-50">
                  <ClientsForm />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
