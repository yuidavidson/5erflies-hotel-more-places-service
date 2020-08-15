import React from 'react';
import styled from 'styled-components';

let MorePlacesEntry = (props) => (
  <Card>
    <div className="column">
      <div className="image">
        <a href={`?propertyId=${props.place.propertyId}`}><Image src={props.place.img} /></a>
      </div>
      <div className="property-description">
        <div>{props.place.propertyType} • {props.place.numOfRooms} beds</div>
        <div>{props.place.rating} ({props.place.numOfRatings})</div>
        <div>{props.place.description}</div>
        <div><Price>${props.place.price}</Price> / night</div>
      </div>
    </div>
  </Card>
)
const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  flex: 1;
  min-width: 150px;
`;
const Image = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 10px;
`;

const Price = styled.span`
  font-weight: bold;
`;

export default MorePlacesEntry;