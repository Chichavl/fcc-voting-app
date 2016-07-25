import React, { Component } from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

export default class NavbarInstance extends Component {
  
  render() 
  {
    const navbarInstance = (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='#'>fcc-voting-app</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href='#'>Home</NavItem>
        </Nav>
        <Nav pullRight>
                <NavItem eventKey={2} href='#'>Login</NavItem>
        </Nav>
      </Navbar>
    );
    return navbarInstance;
  }
}