import React from 'react'
import CardHotels from '../CardHotels/CardHotels';
import Filter from '../Filter/Filter';
import Search from '../Search/Search';

const Home = () => {
  return (
    <div>
      <Filter/>
      <CardHotels/>
    </div>
  )
}

export default Home;


