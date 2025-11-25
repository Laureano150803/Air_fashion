let apiUrl = 'http://localhost:8000/'

if(import.meta.env.PROD){
    apiUrl == import.meta.env.VITE_API
    console.log("ambiente 1 "+import.meta.env.VITE_API);
}else{
    console.log("ambiente: "+import.meta.env.VITE_API);
} 

export default apiUrl