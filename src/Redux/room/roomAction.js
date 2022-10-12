
//-------------------IMPORTS------------------//
import axios from 'axios';
import { getAllRooms, getRoomById } from './roomSlice';

export function getRooms(){
    return  async function(dispatch){
        let rooms = await axios.get('http://localhost:3001/room')
        dispatch(getAllRooms(rooms.data))
    }
}

export function roomById(id){
    return async function(dispatch){
        let roomDetail= await axios.get(`http://localhost:3001/room/${id}`)
        dispatch(getRoomById(roomDetail.data))
    }
}


