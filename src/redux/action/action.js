import axios from 'axios';
import { dataBase } from '../../dataBase/dataBase';

export const GET_ALL_HOTELS = "GET_ALL_HOTELS";
export const GET_ALL_ROOMS = "GET_ALL_ROOMS";
export const SEARCH_NAME_HOTEL = "SEARCH_NAME_HOTEL";
export const SEARCH_NAME_ROOM = "SEARCH_NAME_ROOM";
export const GET_HOTEL_DETAIL = "GET_HOTEL_DETAIL";
export const GET_ROOMS_DETAIL = "GET_ROOMS_DETAIL";
export const CLEAR_HOTEL_DETAIL = "CLEAR_HOTEL_DETAIL";
export const CLEAR_ROOM_DETAIL = "CLEAR_ROOM_DETAIL";
export const GET_ALL_SERVICES_HOTEL = "GET_ALL_SERVICES_HOTEL";
export const POST_HOTEL = "POST_HOTEL";
export const POST_ROOM = "POST_ROOM";
export const ORDER_BY = "ORDER_BY";

export const CREATE_HOTELS = "CREATE_HOTELS";
export const CREATE_ROOMS = "CREATE_ROOMS";
export const URL_POST_HOTEL = "URL_POST_HOTEL";
export const URL_POST_ROOM = "URL_POST_ROOM";



const BACK_URL = "http://localhost:3001"
//----------------------- HOTELS ------------------------------//

export function postHotel(payload){
  return async function(dispatch) {
    try {
      const hotels = await axios.post(`${BACK_URL}/hotels`,payload)
      return dispatch ({
        type: POST_HOTEL,
        payload: hotels
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function getDetailHotel(id){
  return async function(dispatch) {
    try {
      const detailH = await axios.get(`${BACK_URL}/hotels/${id}`)
      return dispatch({
        type: GET_HOTEL_DETAIL, 
        payload: detailH.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function getHotels() {
  return async function (dispatch) {
    let hotels = await axios.get(`${BACK_URL}/hotels`)
    dispatch({
      type: GET_ALL_HOTELS,
      payload: hotels.data
    })
  }
}

export function hotelByName(name) {
  return async function (dispatch) {
    try {
      if (name) {
        let hotelName = await axios.get (`${BACK_URL}/hotels?name=${name}`)
        return dispatch({
          type: SEARCH_NAME_HOTEL,
          payload: hotelName.data
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export function postRoom(payload){
  return async function(dispatch) {
    try {
      const rooms = await axios.post(`${BACK_URL}/rooms`,payload)
      dispatch ({
        type: POST_ROOM,
        payload: rooms
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function getDetailRoom(id){
  return async function(dispatch) {
    try {
      const detailR = await axios.get(`${BACK_URL}/rooms/${id}`)
      return dispatch({
        type: GET_ROOMS_DETAIL, 
        payload: detailR.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

export function getRooms() {
  return async function (dispatch) {
    let rooms = await axios.get(`${BACK_URL}/rooms`)
    dispatch({
      type: GET_ALL_ROOMS,
      payload: rooms.data
    })
  }
}

export function roomByName(name) {
  return async function (dispatch) {
    try {
      if (name) {
        let roomName = await axios.get (`${BACK_URL}/rooms?name=${name}`)
        return dispatch({
          type: SEARCH_NAME_ROOM,
          payload: roomName.data
        })
      }
    } catch (error) {
      console.log(error)
    }
  }
}

//PAULA

export function getAllServicesHotel(){
  return async function (dispatch) {
    try {
      const services= await axios.get(`${BACK_URL}/serviceHotels`)
      return dispatch({
        type: GET_ALL_SERVICES_HOTEL,
        payload: services
      })
    } catch (e) {
      console.log(e)
    }
  }
}

export function orderBy(payload){
  return{
      type: ORDER_BY,
      payload
  }
};

//HERNAN

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
//-------------------------CREATE ROOMS----------------------//
