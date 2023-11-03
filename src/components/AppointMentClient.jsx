import axios from 'axios';
import apiUrl from '../../api.js';
import showSwalAlert from '../showAlert.js';
import { useNavigate } from 'react-router-dom';
import { headers } from '../headers.js';
export default function AppiomentClient() {
  const navigate = useNavigate()


  function confirmAccount() {
    axios.get(apiUrl + 'google', headers)
      .then((res) => {
        showSwalAlert('success', 'Choose your appointment!');
        let url = res.data.redirect;
        window.location.href = url; // Redirige a la URL en la misma ventana.
      })
      .catch((error) => {
        showSwalAlert('error', 'Something went wrong');
        navigate('/appointment'); // Navega a la ruta '/appointment' en la misma ventana.
      });
  }

  return (
    <div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={confirmAccount}>
        make an appointment
      </button>
    </div>


  );
}
