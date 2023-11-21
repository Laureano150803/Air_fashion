import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiUrl from "../../../api";

const service_all = createAsyncThunk('service_all', async()=>{
    try {
        let token = localStorage.getItem('token')
        let headers = { headers: { 'Authorization': `Bearer ${token}` } }
        let res = await axios.get(apiUrl+'services')
        return {
            services:res.data.Response
        }
    } catch (error) {
        return{
            services:[]
        }
    }
})

const actions={service_all}
export default actions