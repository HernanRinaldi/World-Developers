import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHotels } from '../../Redux/hotel/hotelAction';
import  CardHotel  from '../CardHotel/CardHotel';

const CardHotels = () => {
    const dispatch = useDispatch();
    const { hotels } = useSelector(state=>state.hotels)

    useEffect(()=>{
        dispatch(getHotels())
    },[])
    
    return (
        <div>
            {
                hotels && hotels.map((e,i)=>{
                    return (
                        <CardHotel key={i} name={e.name} image={e.image}/>
                    )
                })
            }
        </div>
    )
}

export default CardHotels;