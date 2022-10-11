import { createSlice } from "@reduxjs/toolkit";

export const hotelsSlice = createSlice({
    name:"hotels",
    initialState:{
        hotels:[],
        detail:{}
    },
    reducers:{
        getAllHotels: (state, action)=>{
            state.hotels = action.payload
        },
        getHotelById: (state, action)=>{
            state.detail = action.payload
        },
        getHotelName: (state, action)=>{
            state.hotels = action.payload
        }
    }
})

export const {getAllHotels, getHotelById, getHotelName} = hotelsSlice.actions
export default hotelsSlice.reducer