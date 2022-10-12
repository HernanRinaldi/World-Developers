
//---------------IMPORTS---------------//
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRooms } from '../../Redux/room/roomSlice';

//----------------CSS-------------------//
import  './CardStyle.css'

//-----------FUCNTION CARD-----------------//
export const CardRoom = () => {
    const dispatch = useDispatch();
    const { rooms } = useSelector(state=>state.rooms)
console.log('info que llega al componente:',rooms)
    useEffect(()=>{
        dispatch(getAllRooms())
    },[])
    
    return (
        <div>
            {
                 rooms?.map((e,i)=>{
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
