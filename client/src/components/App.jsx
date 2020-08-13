/* eslint-disable import/extensions */
import React from 'react';
import axios from 'axios';
import MorePlaces from './morePlaces.jsx';
import Button from '../styleComponents/Button.js';
import Wrapper from '../styleComponents/Wrapper.js';

let query = window.location.search;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [],
      property: null,
      relatedProperties: []
    },

    this.setProperties = this.setProperties.bind(this);
    this.getProperties = this.getProperties.bind(this);
    this.setProperty = this.setProperty.bind(this);
    this.getProperty = this.getProperty.bind(this);
    this.setRelatedProperties = this.setRelatedProperties.bind(this);
  }

  componentDidMount() {
    this.getProperties();
    this.getProperty();
  }

  getProperties() {
    axios.get('/test-seeder')
      .then(this.setProperties)
      .catch(console.log);
  }

  setProperties(properties) {
    this.setState({ properties: properties.data });
    console.log(this.state.properties);
  }

  getProperty() {
    axios.get(`/test1/${query}`)
      .then( (result) => {
        this.setProperty(result);
        return this.state.property;
      })
      .then(this.setRelatedProperties)
      .catch(console.log);
  }

  setProperty(property) {
    this.setState({ property: property.data[0] });
    console.log(property.data[0])
  }

  setRelatedProperties() {
    for (let i = 0; i < this.state.property.similarPlaces.length; i += 1) {
      let similarPlace = this.state.property.similarPlaces[i]
      for (let j = 0; j < this.state.properties.length; j += 1) {
        let property = this.state.properties[i];
        if (similarPlace === property.propertyId) {
          this.setState({ relatedProperties: [...this.state.relatedProperties, property]});
        }
      }
    }

  }

  render() {
    return (
      <Wrapper>
      {console.log(this.state.relatedProperties)}
        <MorePlaces places={this.state.properties} />
        <Button>Click</Button>
      </Wrapper>
    )
  }
}

export default App;
