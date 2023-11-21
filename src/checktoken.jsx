import axios from "axios";
import apiUrl from "../api";
export const checktoken = async(headers)=>{
    try {
        await axios.get(apiUrl + 'auth', headers);
      } catch (error) {
        // Si hay un error, asumimos que el token ha expirado
        localStorage.clear();
        // Retornamos una promesa resuelta después de limpiar el local storage
        return Promise.resolve();
      }
}