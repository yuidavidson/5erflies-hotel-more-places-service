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
  border-width: 0px 10px;
  flex: {
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 33.333%;
  };
  max-width: 33.333%;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  font-weight: 400;
  font-size: 16px;
  margin: 0 10px 0 10px;
`;
const Image = styled.img`
  height: 150px;
  width: 225px;
  border-radius: 8px;
`;

const Price = styled.span`
  font-weight: bold;
`;

export default MorePlacesEntry;