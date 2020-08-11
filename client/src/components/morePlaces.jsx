import React from 'react';
import MorePlacesEntry from './morePlacesEntry.jsx';

let MorePlaces = (props) => (
  <ul>
    {props.places.map( (place) => {
      <MorePlacesEntry place={place} />
    })}
  </ul>
)

export default MorePlaces;