
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const navBarStyle = {
    backgroundColor: "#00FFFF",
    height: 64,
}

const logoStyle = {
    height: 48,
    marginRight: 16,
    borderRadius: "50%"
}

const navBarBrandStyle = {
    fontSize: 24,
    color: "#000000",
    "&:hover": { color: "pink" }
}

const textStyle = {
    fontSize: 18,
    color: "#000000",
    "&:hover": { color: "#FFF" }
}

export const NavigationBar = () => (
  <div>
    <Navbar expand="lg" style={ navBarStyle } fixed="top">
      <img src="/images/pickle.jpeg" style={ logoStyle }/>
      <Navbar.Brand href="/home" style={ navBarBrandStyle }>Learning Bird</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/home" style={ textStyle }>Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/about" style={ textStyle }>About</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/physics" style={ textStyle }>Physics</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/mathematics" style={ textStyle }>Mathematics</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/literature" style={ textStyle }>Literature</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)