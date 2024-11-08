import { createSlice } from "@reduxjs/toolkit";

 
export const authSlice = createSlice({
  name: "auth" ,
  initialState:{
    email: "alfia@gmail.com",
    password: "alfia123"
  }
})