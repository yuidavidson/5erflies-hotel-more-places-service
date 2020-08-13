import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';
import { configure, shallow } from 'enzyme';

// import components
import App from '../client/src/components/App.jsx';
import MorePlaces from '../client/src/components/morePlaces.jsx';
import MorePlacesEntry from '../client/src/components/morePlacesEntry.jsx';
configure({ adapter: new Adapter() });


// function setup() {
//   const props = {
//     imgPath: '/Users/tomnguyen/Desktop/Screenshots for FEC/Screen Shot 2020-08-07 at 6.32.09 PM.png'
//   };
//   const wrapper = shallow(<MorePlacesEntry />);
//   return {wrapper, props};
// }
const mockPlaces =
[
  {
    "similarPlaces": [
        79,
        34,
        3,
        99,
        89,
        21,
        15,
        29,
        26,
        77,
        66,
        4,
        41
    ],
    "_id": "5f34a580df4307555b88fe26",
    "propertyId": 0,
    "img": "https://hackreactor5erfliesmoreplaces.s3-us-west-1.amazonaws.com/Screen+Shot+2020-08-07+at+6.16.44+PM.png",
    "isSuperHost": true,
    "propertyType": "Shared Room",
    "numOfRooms": 2,
    "rating": 3,
    "numOfRatings": 293,
    "description": "Great location with great views",
    "price": 108,
    "__v": 2
},
  {
    "similarPlaces": [
        69,
        29,
        87,
        54,
        16,
        2,
        60,
        57,
        9,
        94,
        89,
        27,
        94
    ],
    "_id": "5f34a580df4307555b88fe29",
    "propertyId": 3,
    "img": "https://hackreactor5erfliesmoreplaces.s3-us-west-1.amazonaws.com/Screen+Shot+2020-08-07+at+6.16.35+PM.png",
    "isSuperHost": false,
    "propertyType": "Entire Place",
    "numOfRooms": 2,
    "rating": 4,
    "numOfRatings": 75,
    "description": "Lots of food and drinks in fridge",
    "price": 249,
    "__v": 2
  }
]

describe('App Test Suite', () => {
  // it('Should have an image', () => {
  //   const { wrapper } = setup();
  //   expect(wrapper.find('img').props.exists()).toBe(true);
  // });
  it('App should be a stateful component', () => {
    expect(React.Component.isPrototypeOf(App)).toBeTruthy();
  });

  it('Should render MorePlaces when app is initialized', () => {
    let wrapper = shallow(<App />);
    expect(wrapper.find('Wrapper').exists(true));
  })

  it('should get all the properties', () => {
    let wrapper = shallow(<App />);
    let instance = wrapper.instance();
    expect(wrapper.state('properties')).toHaveLength(0);
    instance.getProperties();
    setTimeout( () => {
      expect(wrapper.state('properties')).toHaveLength(100);
    }, 1000);

  })

}),

describe('MorePlaces Test Suite', () => {
  it('MorePlaces should be a stateless component', () => {
    expect(React.Component.isPrototypeOf(MorePlaces)).toBeFalsy();
  });

  it('should render two MorePlacesEntry when given two property', () => {
    let wrapper = shallow(<MorePlaces places={mockPlaces} />);

    expect(wrapper.find('div').children()).toHaveLength(mockPlaces.length);
  })
}),

describe('MorePlacesEntry Test Suite', () => {
  it('MorePlacesEntry should be a stateless component', () => {
    expect(React.Component.isPrototypeOf(MorePlacesEntry)).toBeFalsy();
  });

  it('should have render an image', () => {
    let wrapper = shallow(<MorePlacesEntry place={mockPlaces[0]}/>);
    expect(wrapper.find("img").exists(true));
  });

}),

describe('Server Test Suite', () => {
  it('should GET all the properties',  () => {
    let getData = [];
    let testGet = () => {
      axios.get('/test-seeder')
        .then( (data) => {
          getData = data.data;
        })
        .catch();
    }
    testGet();
    setTimeout( () => {
      expect(getData).toHaveLength(100);
    }, 1000);
  })
})
