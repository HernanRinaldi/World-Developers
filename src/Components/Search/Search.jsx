//---------------IMPORTS---------------//
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {hotelByName} from '../../redux/action/action';
// import "./Styles.css";

//--------------FUNCTION-----------------//
/* export default function Search() {
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
  } */

  //----------------RETURN------------------//
 /*  return (
    <div>
      <input type='text' placeholder='Search hotel...' onChange={handleInputChange} />
      <button type="submit" onClick={handleSubmit}>Search</button>
    </div>
  );
} */

export default function Search({setCurrentPage}) {
  const dispatch = useDispatch()
  const [name, setName] = useState("");

  function handleInputChange(e){
      e.preventDefault()
      setName(e.target.value)
  }
   function handleSubmit(e){
      e.preventDefault();
      dispatch(hotelByName(name));
      setCurrentPage(1);
   }
  return (
      <div className='input-div'> 
          <input
              className='input-search'
              type='search'
              placeholder='   Search hotel ...'
              onChange={ handleInputChange }
              value={name}
          />
          <button className='button-search' type='search' onClick={handleSubmit}><strong>Search</strong></button>
      </div>
  )
}


 