import { configureStore } from "@reduxjs/toolkit";
import service_all from './reducers/allServices.js'

const store = configureStore({
    reducer:{
        service_all:service_all
    }
})
export default store