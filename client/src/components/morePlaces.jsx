import React from 'react';
import MorePlacesEntry from './morePlacesEntry.jsx';

let MorePlaces = (props) => (
  <div>
    {props.places.map( (place) => {
      <MorePlacesEntry place={place} />
    })}
  </div>
)

export default MorePlaces;