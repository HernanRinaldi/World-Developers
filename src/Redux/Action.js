
//-------------------IMPORTS------------------//
import axios from 'axios';
import { getAllHotels, getHotelsById } from './hotelsSlice';

export function getHotels(){
    return async function(dispatch){
        let hotels = await axios.get('')
        dispatch(getAllHotels(hotels.data.results))
    }
}


