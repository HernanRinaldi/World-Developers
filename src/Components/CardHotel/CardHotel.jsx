import React from 'react'

const CardHotel = ({ name, image }) => {
    
    return (
        <div>
            <p>{name}</p>
            <img src={image} alt={name} />
        </div>
    )
}

export default CardHotel;