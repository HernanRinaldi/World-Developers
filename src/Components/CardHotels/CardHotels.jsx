import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHotels } from "../../redux/action/action";
import CardHotel from "../CardHotel/CardHotel";
import Loader from "../Loader/Loader";
import './CardHotels.css'

const CardHotels = () => {
  const dispatch = useDispatch();
  const hotels = useSelector((state) => state.reducerHotel.hotels);

  useEffect(() => {
    dispatch(getHotels());
  }, [dispatch]);

  return (
    <div className="cardHotels-container">
      {hotels.length ? hotels.map((h) => (
        <CardHotel
          key={h.id}
          id={h.id}
          image={h.image}
          name={h.name}
          qualification={h.qualification}
          location={h.Locations.map((l) => `${l.city}, ${l.country}, ${l.continent}`).join(', ')}
        />
      )) : <Loader />}
    </div>
  );
};

export default CardHotels;
