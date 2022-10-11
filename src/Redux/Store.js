
//------------IMPORTS--------------------//
 import { configureStore } from "@reduxjs/toolkit";
 import hotels from "./hotelsSlice";
 import detail from "./hotelsSlice";


 export default configureStore({
    reducer:{
        hotels: hotels,
        detail: detail
       // rooms: rooms 
    }
 })