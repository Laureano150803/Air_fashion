/* let apiUrl = 'http://localhost:8000/' */
let apiUrl = 'https://airfashion.onrender.com/'

if(import.meta.env.PROD){
    apiUrl == import.meta.env.VITE_API
    console.log("ambiente 1 "+import.meta.env.VITE_API);
}

export default apiUrl