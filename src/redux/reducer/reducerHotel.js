import {
  GET_ALL_HOTELS,
  SEARCH_NAME_HOTEL,
  GET_HOTEL_DETAIL,
  GET_ALL_SERVICES_HOTEL,
  CREATE_HOTELS,
  CREATE_ROOMS,
  GET_ALL_LOCATIONS,
  FILTER_BY_CITY,
  CLEAR_DETAIL
} from '../action/action';

const initialStateHotel = {
  hotels: [],
  detailHotel: {},
  servicesHotel: [],
  location: []
};

const hotels_reducer = (state = initialStateHotel, action) => {
  switch (action.type) {
    case GET_ALL_HOTELS:
      return {
        ...state,
        hotels: action.payload
      }

    case SEARCH_NAME_HOTEL:
      return {
        ...state,
        hotels: action.payload

      }
    case GET_HOTEL_DETAIL:
      return {
        ...state,
        detailHotel: action.payload
      }

    case CLEAR_DETAIL:
      return {
        ...state,
        detailHotel: {}
      }

    case GET_ALL_SERVICES_HOTEL:
      return {
        ...state,
        servicesHotel: action.payload
      }

    case CREATE_HOTELS:
      return {
        ...state,
      }
      
    case CREATE_ROOMS:
      return {
        ...state,
      }
  
    case GET_ALL_LOCATIONS:
      return {
        ...state,
        location: action.payload
      }
    
    case FILTER_BY_CITY:
      return {
        ...state,
        hotels: action.payload
      }

    default:
      return { ...state }
  }
}


export default hotels_reducer;