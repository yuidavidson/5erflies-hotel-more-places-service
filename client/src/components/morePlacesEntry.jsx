import React from 'react';
import styled from 'styled-components';

let MorePlacesEntry = (props) => (
  <Card>
    <div className="image">
      <HeartImg src={heartImg} />
      <a href={`?propertyId=${props.place.propertyId}`}><Image src={props.place.img} /></a>
    </div>
    <div className="property-description">
      <div>{props.place.propertyType} • {props.place.numOfRooms} beds</div>
      <div><StarImg src={starImg} /> {props.place.rating} <NumRatings>({props.place.numOfRatings})</NumRatings></div>
      <div>{props.place.description}</div>
      <div><Price>${props.place.price}</Price> / night</div>
    </div>
  </Card>
)
let starImg = "https://hackreactor5erfliesmoreplaces.s3-us-west-1.amazonaws.com/Screen+Shot+2020-08-14+at+9.41.44+PM.png";
let heartImg = "https://hackreactor5erfliesmoreplaces.s3-us-west-1.amazonaws.com/airbnb-heart.png"

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
  height: 100% || 120px;
  width: 100%;
  border-radius: 8px;
  position: relative;
  z-index: 0;
`;
const HeartImg = styled.img`
  height: 14px;
  width: 16px;
  position: relative;
  bottom: 85%;
  left: 85%;
  z-index: 1;
`
const StarImg = styled.img`
  height: 14px;
  width: 14px;
  line-height: 0px;
`;

const NumRatings = styled.span`
  color: grey
`
const Description = styled.div`
  display: flex;
  flex: {
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: 33.333%;
  };
  max-width: 33.33%;
`;
const Price = styled.span`
  font-weight: bold;
`;

export default MorePlacesEntry;