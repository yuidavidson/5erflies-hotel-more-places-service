import React from 'react';

let MorePlacesEntry = (props) => (
  <div class="column">
    <img src={props.place.img}></img>
    {console.log(props.place.img)}
  </div>
)

export default MorePlacesEntry;