import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllHotels } from '../../Redux/hotel/hotelAction';

export const Hotels = () => {
    const dispatch = useDispatch();
    const { hotels } = useSelector(state=>state.hotels)

    useEffect(()=>{
        dispatch(getAllHotels())
    },[])
    
    return (
        <div>
            {
                hotels && hotels.map((e,i)=>{
                    return (
                        <div key={i}>
                            <p>{e.name}</p>
                            <img src={e.image} alt={e.name} />
                        </div>
                    )
                })
            }
        </div>
    )
}