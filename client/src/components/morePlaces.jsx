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
    console.log(this.state.pageNum)
    if (this.state.pageNum < 0) {
      this.setState({ pageNum: (this.state.pageNum + 3) });
    }
  }

  render() {
    console.log(this.props.places.slice(8))
    if (this.state.pageNum === 0) {
      let firstPage = this.props.places.slice(0, 4);
      return (
        <div>
          <NavBar><PrevButton onClick={this.prevArrowClick}>prev</PrevButton><NextButton onClick={this.nextArrowClick}>next</NextButton></NavBar>
        <Wrapper>
          {firstPage.map( (place) =>
            <MorePlacesEntry key={place.propertyId} place={place} />
          )}
        </Wrapper>
        </div>
      )
    } else if (this.state.pageNum === 1) {
      let secondPage = this.props.places.slice(4, 8);
      return (
        <div>
          <NavBar><PrevButton onClick={this.prevArrowClick}>prev</PrevButton><NextButton onClick={this.nextArrowClick}>next</NextButton></NavBar>
        <Wrapper>
          {secondPage.map( (place) =>
            <MorePlacesEntry key={place.propertyId} place={place} />
          )}
        </Wrapper>
        </div>
      )
    } else if (this.state.pageNum === 2 || this.state.pageNum === -1) {
      let thirdPage = this.props.places.slice(8);
      return (
        <div>
          <NavBar><PrevButton onClick={this.prevArrowClick}>prev</PrevButton><NextButton onClick={this.nextArrowClick}>next</NextButton></NavBar>
        <Wrapper>
          {thirdPage.map( (place) =>
            <MorePlacesEntry key={place.propertyId} place={place} />
          )}
        </Wrapper>
        </div>
      )
    }
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