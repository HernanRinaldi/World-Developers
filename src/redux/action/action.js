
import axios from 'axios';
import { dataBase } from '../../dataBase/dataBase';



export const GET_ALL_HOTELS = "GET_ALL_HOTELS";
export const GET_ALL_ROOMS = "GET_ALL_ROOMS";
export const SEARCH_NAME = "SEARCH_NAME";
export const GET_HOTEL_DETAIL = "GET_HOTEL_DETAIL";
export const GET_ROOMS_DETAIL = "GET_ROOMS_DETAIL";
export const CLEAR_HOTEL_DETAIL = "CLEAR_HOTEL_DETAIL";
export const CLEAR_ROOM_DETAIL = "CLEAR_ROOM_DETAIL";
export const GET_SERVICE_HOTEL = "GET_SERVICE_HOTEL";


//----------------------- HOTELS ------------------------------//

export function getHotels(){
    return async function(dispatch){
        //let hotels = await axios.get(URL)
        dispatch({
            type: GET_ALL_HOTELS,
            payload: dataBase
        })
    }
}

export function hotelByName(name){
    return async function(dispatch){
        try {
            if(name){
                let data = dataBase.map(ele=>ele.name.includes(name))
               return  dispatch({
                    type: SEARCH_NAME,
                    payload: data 
                })
            }
            //dispatch(getHotelName(datos.name))
            //let hotelName = await axios.get (`http://localhost:3001/hotel?name=${name}`)

        } catch (error) {
            console.log(error)
        }
    }
}

export function hotelById(id){
//     return async function(dispatch){
// //        dispatch(getHotelById(datos));
//         //let hotelDetail= await axios.get(`http://localhost:3001/hotel/${id}`)
//         dispatch(dataBase)
//     }
}