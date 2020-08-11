import React from 'react';

let MorePlacesEntry = (props) => (
  <div className="columngroup">
    <div className="column">
      <div className="image">
        <a href={`${props.place.propertyId}`}><img className="propertyImg" src={props.place.img}></img></a>
      </div>
      <div className="property-description">

      </div>
    </div>
  </div>
)

export default MorePlacesEntry;