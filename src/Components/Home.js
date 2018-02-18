import React, { Component } from 'react';
import Login from '../Components/Login';

class Home extends Component {

  render() {
    console.log(this.props.location);
    console.log(this.state);
    return(
      <div>
        <Login></Login>
      </div>
    );
  }
}

export default Home
