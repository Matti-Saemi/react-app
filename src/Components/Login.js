import React, { Component } from 'react';
import axios from 'axios';
import './Login.css'
import logo from '../logo.svg'
import { FormGroup, Button } from 'react-bootstrap';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      loggedInUser : {}
    }
  }

  handleSubmit(event) {
      event.preventDefault();
      let email = this.refs.inputEmail.value;
      let pass = this.refs.inputPassword.value;
      if(!email || !pass) {
          alert("Plz fill all")
          return;
      }

      axios.post('/users', {
          email: email,
          pass : pass
      })
      .then((response) => {
          if(response.data) {
              this.setState({
                loggedInUser : {
                  email : response.data.email,
                  name : response.data.name
                }}, () => this.props.setLoggedInUser(this.state.loggedInUser))
          }
      })
      .catch((error) => {
          console.log("Error ", error)
      })

  }

  render() {
    return(
      <form className="form-signin" onSubmit={this.handleSubmit.bind(this)}>
        <img className="mb-4" src={logo} alt="" width="150" height="150" />
        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
        <FormGroup>
          <input className="form-control" ref="inputEmail" type="email"  placeholder="Email address" required="" autoFocus=""/>
        </FormGroup>
        <FormGroup>
          <input className="form-control" ref="inputPassword" type="password" placeholder="Password" required="" />
        </FormGroup>
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </div>
        <Button type="submit" bsStyle="primary" bsSize="large" block>
          Sign in
        </Button>
        <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
      </form>
    )
  }
}

export default Login
