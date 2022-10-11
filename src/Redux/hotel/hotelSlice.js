import { createSlice } from "@reduxjs/toolkit";

export const hotelsSlice = createSlice({
    name:"hotels",
    initialState:{
        hotels:[],
        detail:{}
    },
    reducers:{
        actionGetAllHotels: (state,action)=>{
            state.hotels = action.payload
        },
        actionGetHotelById: (state,action)=>{
            state.detail = action.payload
        }
    }
})

export const {actionGetAllHotels, actionGetHotelById} = hotelsSlice.actions
export default hotelsSlice.reducer