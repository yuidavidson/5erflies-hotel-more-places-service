import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

// import components
import MorePlacesEntry from '../client/src/components/morePlacesEntry.jsx'
const sum = require('./sum');
configure({ adapter: new Adapter() });


// function setup() {
//   const props = {
//     imgPath: '/Users/tomnguyen/Desktop/Screenshots for FEC/Screen Shot 2020-08-07 at 6.32.09 PM.png'
//   };
//   const wrapper = shallow(<MorePlacesEntry />);
//   return {wrapper, props};
// }
const mockPlace = {
  "similarPlaces": [
      46,
      99,
      75,
      39,
      63,
      36,
      36,
      39,
      11,
      69,
      72,
      57
  ],
  "_id": 3,
  "img": "https://hackreactor5erfliesmoreplaces.s3-us-west-1.amazonaws.com/Screen+Shot+2020-08-07+at+6.32.09+PM.png",
  "isSuperHost": true,
  "propertyType": "Private Room",
  "numOfRooms": 3,
  "rating": 4,
  "numOfRatings": 289,
  "description": "How many of these will i write?",
  "price": 376,
  "__v": 0
}

describe('MorePlacesEntry Test Suite', () => {
  // it('Should have an image', () => {
  //   const { wrapper } = setup();
  //   expect(wrapper.find('img').props.exists()).toBe(true);
  // });
  it('should have 12 related properties', () => {
    const component = shallow(<MorePlacesEntry place={mockPlace}/>);
    console.log(component)
    expect(mockPlace.similarPlaces).toHaveLength(12);
  })
});

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
