import React from 'react';
import MorePlacesEntry from './morePlacesEntry.jsx';
import styled from 'styled-components';

class MorePlaces extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 0
    }
  }

  nextArrowClick() {
    this.setState({ pageNum: (pageNum + 1) % 3 });
  }

  prevArrowClick() {
    this.setState({ pageNum: (pageNum - 1) % 3 });
    if (this.state.pageNum < 0) {
      this.setState({ pageNum: (pageNum + 3) });
    }
  }

  render() {

    return (
      <Wrapper>
        {this.props.places.map( (place) =>
          <MorePlacesEntry key={place.propertyId} place={place} />
        )}
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
display: flex;
flex-direction: row;
`;

export default MorePlaces;