import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer:{
        //aqui voy a poner los reductores (los debemos importar) ej: user:userReducer
    }
})