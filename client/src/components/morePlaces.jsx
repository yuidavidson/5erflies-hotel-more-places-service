import React from 'react';
import MorePlacesEntry from './morePlacesEntry.jsx';
import styled from 'styled-components';

let MorePlaces = (props) => (
  <Wrapper>
    {props.places.map( (place) =>
      <MorePlacesEntry key={place.propertyId} place={place} />
    )}
  </Wrapper>
)

const Wrapper = styled.div`
display: flex;
flex-direction: row;
`;

export default MorePlaces;