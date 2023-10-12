import { createReducer } from "@reduxjs/toolkit";
import actions from "../actions/allServices.js";

const {service_all} = actions

let initialState ={
    services:[]
}
const reducer = createReducer(
    initialState,
    (builder)=>builder
    .addCase(
        service_all.fulfilled,
        (state, action) =>{
            let newState={
                ...state,
                services:action.payload.services
            }
            return newState
            
        }
    )
)
export default reducer