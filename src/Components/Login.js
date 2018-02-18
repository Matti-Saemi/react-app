import React, { Component } from 'react';
import $ from 'jquery';
import './Login.css'
import logo from '../logo.svg'
import { FormGroup, Button } from 'react-bootstrap';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      loggedInUser : {
        email : "",
        name : ""
      }
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    let email = this.refs.inputEmail.value;
    let pass = this.refs.inputPassword.value;
    if(!email || !pass) {
        alert("Plz fill all")
    }

    $.ajax({
      url : "https://my-json-server.typicode.com/matti-saemi/fake-json-api/users",
      method: "POST",
      data: { email : email, pass : pass },
      dataType: "json",
      success : (res) => {
        console.log(res);
        if(res.length){
          this.setState({ loggedInUser:{
            email : res.email,
            name : res.name
          }})
        }

        console.log(this.state);
      },
      error: (err) => {
        console.log(err)
      }
    });
  }

  signIn(email, password) {

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
