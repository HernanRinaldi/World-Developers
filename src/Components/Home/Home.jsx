import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getHotels } from '../../redux/action/action';
import CardHotels from '../CardHotels/CardHotels';
import Filter from '../Filter/Filter';
import Paginado from '../Paginado/Paginado';


const Home = () => {
  const dispatch=useDispatch();

  const [pages, setPages]=useState(0);

  useEffect(()=>{
    dispatch(getHotels(pages))
  },[dispatch, pages])


  return (
    <div>
      {/* <Filter/> */}
        <CardHotels/>
        <Paginado 
          pages={pages}
          setPages={setPages}
        />
    </div>
  )
}

export default Home;


