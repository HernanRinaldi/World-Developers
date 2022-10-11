import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHotels } from '../../Redux/Action';

export const Hotels = () => {
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