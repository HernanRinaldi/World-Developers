
//-------------------IMPORTS------------------//
import axios from 'axios';
import { actionGetAllHotels } from './hotelSlice';

export function getAllHotels(){
    return async function(dispatch){
        let hotels = await axios.get('')
        dispatch(actionGetAllHotels(hotels.data.results))
    }
}


