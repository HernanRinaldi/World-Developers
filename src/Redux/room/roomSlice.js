import { createSlice } from "@reduxjs/toolkit";

export const roomSlice = createSlice({
    name:"rooms",
    initialState:{
        rooms:[],
        detail:{}
    },
    reducers:{
        getAllRooms: (state, action)=>{
            state.rooms = action.payload
        },
        getRoomById: (state,action)=>{
            state.detail = action.payload
        },
        getRoomName: (state, action)=>{
            state.hotels = action.payload
        }
    }
})

export const { getAllRooms, getRoomById, getRoomName } = roomSlice.actions
export default roomSlice.reducer
