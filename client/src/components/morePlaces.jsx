import React from 'react';
import MorePlacesEntry from './morePlacesEntry.jsx';
import Column from '../styleComponents/Column.js';

let MorePlaces = (props) => (
  <Column>
    {props.places.map( (place) =>
      <MorePlacesEntry key={place.propertyId} place={place} />
    )}
  </Column>
)

export default MorePlaces;