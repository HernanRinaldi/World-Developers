import {
    GET_ALL_HOTELS,
    SEARCH_NAME,
    GET_ALL_ROOMS,


} from '../action/action';

const initialState = {
    hotels:[],

};

const rooReducer = ( state = initialState, action )=>{
    switch (action.type) {
        case GET_ALL_HOTELS:
            return {
                ...state,
                hotels : action.payload
            }
        case SEARCH_NAME:
            return {
                ...state,
                hotels: action.payload

            }    
        

            default:
                return { ...state }
                
            

    }


}

export default rooReducer;