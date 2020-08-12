import React from 'react';
import Image from '../styleComponents/Image.js'

let MorePlacesEntry = (props) => (
  <div className="container">
    <div className="column">
      <div className="image">
        <a href={`${props.place.propertyId}`}><Image>{props.place.img} </Image></a>
      </div>
      <div className="property-description">
        <div>{props.place.propertyType} {props.place.numOfRooms} rooms</div>
        <div>{props.place.rating} ({props.place.numOfRatings})</div>
        <div>{props.place.description}</div>
        <div>${props.place.price} / night</div>
      </div>
    </div>
  </div>
)


export default MorePlacesEntry;