//---------------IMPORTS---------------//
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {hotelByName} from '../../Redux/hotel/hotelAction';
// import "./Styles.css";

//--------------FUNCTION-----------------//
export default function Search() {
  const dispatch=useDispatch();

  const [name, setName]=useState('');

  const handleInputChange=(e)=>{
    e.preventDefault();
    setName(e.target.value);
  }
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(hotelByName(name))
    setName('');
  }

  //----------------RETURN------------------//
  return (
    <div>
      <input type='text' placeholder='Search hotel...' onChange={handleInputChange} />
      <button type="submit" onClick={handleSubmit}>Search</button>
    </div>
  );
}
 