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
      property: null
    },

    this.setProperties = this.setProperties.bind(this);
    this.getProperties = this.getProperties.bind(this);
  }

  componentDidMount() {
    this.getProperties();
  }

  getProperties() {
    axios.get('/test-seeder')
      .then(this.setProperties)
      .catch(console.log);
  }

  setProperties(properties) {
    this.setState({ properties: properties.data });
    console.log(this.state.properties);

console.log(query);
  }

  getProperty() {
    axios.get(`/test1/${query}`)
      .then(this.setProperty)
      .catch(console.log);
  }

  setProperty(property) {
    this.setState({ property: property.data });
  }

  render() {
    return (
      <Wrapper>
        <MorePlaces places={this.state.properties} />
        <Button>Click</Button>
      </Wrapper>
    )
  }
}

export default App;
