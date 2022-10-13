import {
  GET_ALL_HOTELS,
  SEARCH_NAME,
  GET_HOTEL_DETAIL,
  
} from '../action/action';

const initialStateHotel = {
  hotels: [],
  detailHotel: {},

};

const hotels_reducer = (state = initialStateHotel, action) => {
  switch (action.type) {
    case GET_ALL_HOTELS:
      return {
        ...state,
        hotels: action.payload
      }
      
    case SEARCH_NAME:
      return {
        ...state,
        hotels: action.payload

      }
    case GET_HOTEL_DETAIL:
      return {
        ...state,
        detailHotel: action.payload
      }

    default:
      return { ...state }
  }
}


export default hotels_reducer;