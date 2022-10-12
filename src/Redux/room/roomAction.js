
//-------------------IMPORTS------------------//
import axios from 'axios';
import { getAllRooms, getRoomById, getRoomName } from './roomSlice';
import {dataBase} from '../../dataBase/dataBase'


export function getRooms(){
    return  async function(dispatch){
        let rooms = await axios.get('http://localhost:3001/room')
        console.log(rooms)
        dispatch(getAllRooms(rooms.data))
    }
}

export function roomById(id){
    return async function(dispatch){
        let roomDetail= await axios.get(`http://localhost:3001/room/${id}`)
        dispatch(getRoomById(roomDetail.data))
    }
}

export function roomByName(name){
    return async function(dispatch){
        try {
            let roomName=await axios.get (`http://localhost:3001/room?name=${name}`)
            dispatch(getRoomName(roomName.data))
        } catch (error) {
            console.log(error)
        }
    }
}
