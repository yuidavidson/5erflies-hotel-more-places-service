import React from 'react';
import axios from 'axios';
import MorePlaces from './morePlaces.jsx';
import Button from '../styleComponents/Button.js';
import Wrapper from '../styleComponents/Wrapper.js';


class App extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      properties: [],
      property: null
    },

    this.setProperties = this.setProperties.bind(this);
    this.getProperties = this.getProperties.bind(this);
  }
  getProperties() {
    axios.get('/test-seeder')
      .then(this.setProperties)
      .catch(console.log)
  }
  setProperties(properties) {
    this.setState({properties: properties.data});
    console.log(this.state.properties);
  }

  getProperty() {
    axios.get('/test1')
    .then(this.setProperty)
    .catch(console.log)
  }
  setProperty(property) {
    this.setState({property: property.data})
  }

  componentDidMount() {
    this.getProperties();
  }



  render() {
    return (
      <Wrapper>
        <MorePlaces places={this.state.properties}/>
        <Button>Click</Button>
      </Wrapper>
    )
  }
}


export default App;
