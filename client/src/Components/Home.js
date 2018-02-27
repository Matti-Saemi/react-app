import React, { Component } from 'react';
import Login from '../Components/Login';

class Home extends Component {

  constructor(){
    super();
    this.state = {
        loggedInUser : {}
    }
  }

  isLoggedIn() {
      const user = JSON.parse(localStorage.getItem("loggedInUser"));
      let existingLoggedInUser = this.state.loggedInUser;

      if(Object.getOwnPropertyNames(existingLoggedInUser).length) {
        return true;
      }
      if (user) {
          this.setState({
            loggedInUser:{
              email : user.email,
              name : user.name
            }
          });
          return true;
      }
      return false;
  }

  handleLogIn(loggedInUser) {
      let existingLoggedInUser = this.state.loggedInUser;
      if(Object.getOwnPropertyNames(existingLoggedInUser).length === 0) {
          this.setState({ loggedInUser : loggedInUser }, () => console.log(this.state));
      }
      localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
  }

  logOut() {
    localStorage.removeItem('loggedInUser');
    this.setState({ loggedInUser : {} }, () => console.log(this.state));
  }

  render() {
      let returnView = <div></div>;
        if(!this.isLoggedIn()) {
        returnView = <Login setLoggedInUser={this.handleLogIn.bind(this)}/>;
      }
      else {
        returnView = <div className="container">
          Hello {this.state.loggedInUser.name}
          <hr/>
          <div className="btn btn-primary" onClick={this.logOut.bind(this)}>LogOut</div>
        </div>

      };
    return(
      <div>
          {returnView}
      </div>
    );
  }
}

export default Home
