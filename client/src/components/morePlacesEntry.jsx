import React from 'react';

let MorePlacesEntry = (props) => (
  <li class="column">
    <img src={props.place.img}></img>
    {console.log(props.place.img)}
    <h1>this should show</h1>
  </li>
)

export default MorePlacesEntry;