
//------------IMPORTS--------------------//
 import { configureStore } from "@reduxjs/toolkit";
 import hotels from "./hotel/hotelSlice";
 import detail from "./hotel/hotelSlice";


 export default configureStore({
    reducer:{
        hotels: hotels,
        detail: detail
       // rooms: rooms 
    }
 })