let apiUrl = 'http://localhost:8000/'

if(import.meta.env.VITE_API === 'production'){
    apiUrl == import.meta.env.VITE_API
    console.log(import.meta.env.VITE_API);
}else{
    console.log(import.meta.env.VITE_API);
} 

export default apiUrl