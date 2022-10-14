import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getHotels, orderBy } from '../../redux/action/action';
import CardHotels from '../CardHotels/CardHotels';
import Filter from '../Filter/Filter';
import Search from '../Search/Search';
import Footer from '../Footer/Footer'
import Nav from "../Nav/Nav"
import Paginado from '../Paginado/Paginado';


const Home = () => {
  const dispatch=useDispatch();

  const [pages, setPages]=useState(0);

  useEffect(()=>{
    dispatch(getHotels(pages))
  },[dispatch, pages])


const Home = () => {
  return (
    <div>
      <Nav />
      {/* <Filter/> */}
      <CardHotels/>
        <Paginado 
          pages={pages}
          setPages={setPages}
        />
      <Footer />
    </div>
  )
}

export default Home;


