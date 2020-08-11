import React from 'react';
import axios from 'axios';
import MorePlaces from './morePlaces.jsx';


class App extends React.Component {
  constructor(props) {
    super(props),
    this.state = {
      properties: []
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

  componentDidMount() {
    this.getProperties();
  }

  render() {
    return (
      <div>
        <MorePlaces places={this.state.properties}/>
      </div>
    )
  }
}


export default App;
