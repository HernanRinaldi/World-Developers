
//---------------IMPORTS---------------//
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRooms } from '../../redux/action/action';

//----------------CSS-------------------//
import  './CardStyle.css'

//-----------FUCNTION CARD-----------------//
const CardRoom = () => {
    const dispatch = useDispatch();
    const  rooms  = useSelector(state=>state.reducerRoom.rooms)

    useEffect(()=>{
        dispatch(getRooms())
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

export default CardRoom;
