import axios from 'axios';
//import { dataBase } from '../../dataBase/dataBase';

export const GET_ALL_HOTELS = "GET_ALL_HOTELS";
export const GET_ALL_ROOMS = "GET_ALL_ROOMS";
export const SEARCH_NAME = "SEARCH_NAME";
export const GET_HOTEL_DETAIL = "GET_HOTEL_DETAIL";
export const GET_ROOMS_DETAIL = "GET_ROOMS_DETAIL";
export const CLEAR_HOTEL_DETAIL = "CLEAR_HOTEL_DETAIL";
export const CLEAR_ROOM_DETAIL = "CLEAR_ROOM_DETAIL";
export const GET_SERVICE_HOTEL = "GET_SERVICE_HOTEL";
export const CREATE_HOTELS = "CREATE_HOTELS";
export const CREATE_ROOMS = "CREATE_ROOMS";

//-----------------------URLS-------------------------------//
const BACK_URL = "http://localhost:3001";
const URL_POST_HOTEL = "http://localhost:3001/hotels";
const URL_POST_ROOM = "http://localhost:3001/rooms";
//----------------------- HOTELS ------------------------------//

export function getHotels() {
  return async function (dispatch) {
    let hotels = await axios.get(`${BACK_URL}/hotels`)
    dispatch({
      type: GET_ALL_HOTELS,
      payload: hotels.data
    })
  }
}

export function getRooms() {
  return async function (dispatch) {
    let rooms = await axios.get(`${BACK_URL}/rooms`)
    dispatch({
      payload: rooms.data
    })
  }
}


export function hotelByName(name) {
  return async function (dispatch) {
    try {
      if (name) {
        let hotelName = await axios.get (`${BACK_URL}/hotels?name=${name}`)
        return dispatch({
          type: SEARCH_NAME,
          payload: hotelName.data
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export function hotelById(id) {
  return async function (dispatch) {
     try {
       let hotelDetail = await axios.get(`${BACK_URL}/hotels/${id}`)
       dispatch({
         type: GET_HOTEL_DETAIL,
         payload: hotelDetail.data
       })
     } catch (error) {
       console.log(error)
     }
   }
}

export function roomById(id) {
   return async function (dispatch) {
     try {
       let roomDetail = await axios.get(`${BACK_URL}/rooms/${id}`)
       dispatch({
         type: GET_ROOMS_DETAIL,
         payload: roomDetail.data
       })
     } catch (error) {
       console.log(error)
     }
   }
  }

  //-------------------------CREATE HOTELS----------------------//
  export function createHotels(payload) {
    
    return async function(dispatch) {

        try {
            const newHotel = await axios.post( URL_POST_HOTEL , payload)
            //console.log("info hacia el back: ", payload)
            return dispatch({
                type: CREATE_HOTELS,
                payload: newHotel
            })
        } catch (error) {
            console.log(error && alert("Error, when create Hotel!!"))
            
        }
    }
}
//-------------------------CREATE ROOMS----------------------//
export function createRooms(payload) {
    
  return async function(dispatch) {

      try {
          const newRoom = await axios.post( URL_POST_ROOM , payload)
          //console.log("info hacia el back: ", payload)
          return dispatch({
              type: CREATE_ROOMS,
              payload: newRoom
          })
      } catch (error) {
          console.log(error && alert("Error, when create Room!!"))
          
      }
  }
}