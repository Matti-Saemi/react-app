import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Header extends Component {

  render(){
    return(
        <Navbar fixedTop className="navbar-expand-md navbar-dark bg-dark">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">Airstream</a>
            </Navbar.Brand>
          </Navbar.Header>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Navbar.Collapse id="navbarsExampleDefault">
            <Nav className="mr-auto">
              <NavItem eventKey={1}  href="#">
                Home
              </NavItem>
              <NavItem eventKey={2}  href="#">
                Projects
              </NavItem>
              <NavItem className=" nav-item disabled" eventKey={3} href="#">
                Stream
              </NavItem>
            </Nav>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </Navbar.Collapse>
        </Navbar>
    );
  }
}

export default Header
