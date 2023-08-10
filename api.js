let apiUrl = 'http://localhost:8000/'

if(process.env.NODE_ENV_API === 'production'){
    apiUrl == process.env.NODE_ENV_API
}

export default apiUrl