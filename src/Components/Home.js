import React, { Component } from 'react';
import Login from '../Components/Login';

class Home extends Component {

  constructor(){
    super();
    this.state = {
        loggedInUser:{
            email : "",
            name : ""
        }
    }
  }

  isLoggedIn() {
      const user = JSON.parse(localStorage.getItem("loggedInUser"));

      if (user) {
          this.setState({ loggedInUser:{
              email : user.email,
              name : user.name
          }});
          return true;
      }
      return false;
  }

  handleLogIn(loggedInUser) {
      let existingLoggedInUser = this.state.loggedInUser;
      if(!existingLoggedInUser){
          this.setState({loggedInUser : loggedInUser});
      }
  }

  render() {
      let returnView = <div></div>;
      if(!this.isLoggedIn()) {
        returnView = <Login setLoggedInUser={this.handleLogIn.bind(this)}/>;
      }
      else if(this.state.user){
        <div>Hello {this.state.user.name}</div>;
      }
    return(
      <div>
          {returnView}
      </div>
    );
  }
}

export default Home
