
//-------------------IMPORTS------------------//
import axios from 'axios';
import { getAllHotels, getHotelById, getHotelName } from './hotelSlice';
// import {dataBase} from '../../dataBase/dataBase.jsx'

// const datos=dataBase;

export function getHotels(){
    return async function(dispatch){
  //      dispatch(getAllHotels(datos));
        let hotels = await axios.get('http://localhost:3001/hotel')
        dispatch(getAllHotels(hotels.data))
    }
}

export function hotelById(id){
    return async function(dispatch){
//        dispatch(getHotelById(datos));
        let hotelDetail= await axios.get(`http://localhost:3001/hotel/${id}`)
        dispatch(getHotelById(hotelDetail.data))
    }
}

export function hotelByName(name){
    return async function(dispatch){
        try {
            //dispatch(getHotelName(datos.name))
            let hotelName=await axios.get (`http://localhost:3001/hotel?name=${name}`)
            dispatch(getHotelName(hotelName.data))
        } catch (error) {
            console.log(error)
        }
    }
}


