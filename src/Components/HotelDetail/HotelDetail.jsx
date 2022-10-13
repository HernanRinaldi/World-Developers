import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { hotelById } from '../../redux/action/action.js';
// import Loading from '../Loading/Loading.jsx';
// import ServicesHotel from '../ServicesHotel/ServicesHotel.jsx'
import CardRoom from '../CardRoom/CardRoom.jsx';

const HotelDetail = () => {
  const dispatch=useDispatch();
  const {id} =useParams();

  useEffect(()=>{
    dispatch(hotelById(id));
  }, [dispatch, id])

  const hotelDetail=useSelector((state)=>state.reducerHotel.detailHotel)

  return (
    <div>
      {
        hotelDetail.name ?
        <div>
          {/* <div>
            <Link to='/home'><button>Home</button></Link>
          </div> */}

          <img src={hotelDetail.image} />

          <div>
            <h2>{hotelDetail.name}</h2>
          </div>

          <div>
            <p>{hotelDetail.location}</p>
          </div>

          <div>
            <p>{hotelDetail.description}</p>
          </div>

          <div>
            <h2>Available rooms</h2>
            <CardRoom/>
          </div>

          <div>
            <h2>What this place offers</h2>
            {/* <ServicesHotel/> */}
          </div>

        </div> : <p>Loading...</p>
        // <Loading/>
      }
    </div>
  )
}

export default HotelDetail;