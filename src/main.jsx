import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store'
import { RouterProvider } from 'react-router-dom'
import router from './routes/routes.jsx'
import { ThemeProvider } from '@material-tailwind/react'
ReactDOM.createRoot(document.getElementById('root')).render(
        <ThemeProvider>
                <Provider store={store}>
                        <RouterProvider router={router} />
                </Provider>
        </ThemeProvider>
)
