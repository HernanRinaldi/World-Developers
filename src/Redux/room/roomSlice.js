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
        }
        
    }
})

export const { getAllRooms, getRoomById } = roomSlice.actions
export default roomSlice.reducer
