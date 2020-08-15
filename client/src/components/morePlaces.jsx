import React from 'react';
import MorePlacesEntry from './morePlacesEntry.jsx';
import styled from 'styled-components';

class MorePlaces extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 0
    }
    this.nextArrowClick = this.nextArrowClick.bind(this);
    this.prevArrowClick = this.prevArrowClick.bind(this);
  }

  nextArrowClick() {
    this.setState({ pageNum: (this.state.pageNum + 1) % 3 });
  }

  prevArrowClick() {
    this.setState({ pageNum: (this.state.pageNum - 1) % 3 });
    if (this.state.pageNum < 0) {
      this.setState({ pageNum: (this.state.pageNum + 3) });
    }
  }

  render() {

    return (
      <div>
        <NavBar><PrevButton onClick={this.prevArrowClick}>prev</PrevButton><NextButton onClick={this.nextArrowClick}>next</NextButton></NavBar>
      <Wrapper>

        {this.props.places.map( (place) =>
          <MorePlacesEntry key={place.propertyId} place={place} />
        )}
      </Wrapper>
      </div>
    )
  }
}

const NavBar = styled.div`
  display: inline;
  float: right;
  padding: 5px 0 5px 0;
`;

const PrevButton = styled.button`
  border-radus: 50%;
  border: 1px solid #C5C5C5;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  font-weight: 400;
  font-size: 16px;
  margin-right: 5px;
`;

const NextButton = styled.button`
  border-radus: 50%;
  border: 1px solid #C5C5C5;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  font-weight: 400;
  font-size: 16px;
  margin-left: 5px;
`;

const Wrapper = styled.div`
display: flex;
flex-direction: row;
clear: both;
`;

export default MorePlaces;