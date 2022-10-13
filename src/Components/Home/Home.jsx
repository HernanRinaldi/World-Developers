import React from 'react'
// import Search from '../Search/Search'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

import CardHotel from '../CardHotel/CardHotel';
import { getHotels } from '../../redux/action/action.js';


const Home = () => {

  const dispatch = useDispatch();
  const data_hotels = useSelector( (state) => state.hotels );
//console.log("info que llega para renderizar: ", data_hotels)
useEffect(() => {
dispatch( getHotels() )

}, [dispatch])


  return (
    <div>
        {/* <Search/> */}
        {data_hotels?.map( ele=> {return( <CardHotel name={ele.name} image={ele.image} /> )} )}
    </div>
  )
}

export default Home;
