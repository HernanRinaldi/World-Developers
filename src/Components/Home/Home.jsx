import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getHotels, orderBy } from '../../redux/action/action';

import CardHotels from '../CardHotels/CardHotels';
import Filter from '../Filter/Filter';
import Search from '../Search/Search';
import Footer from '../Footer/Footer'
import Nav from "../Nav/Nav"



const Home = () => {

  return (
    <div>
      <Nav />
      {/* <Filter/> */}
      <CardHotels />
      <Footer />
    </div>
  )
}

export default Home;


