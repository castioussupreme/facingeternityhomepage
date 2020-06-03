import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBBtn
} from "mdbreact";

class NavBar extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <MDBNavbar color="unique-color-dark sticky-top" dark expand="md">
        <MDBNavbarBrand>
          <MDBNavLink to="/">
            <strong className="white-text">Facing</strong>
            <strong className="red-text">Eternity</strong>
          </MDBNavLink>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink to="/about">About</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/contact">Contact</MDBNavLink>
            </MDBNavItem>

          </MDBNavbarNav>
        </MDBCollapse>
        <MDBBtn href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=SZD9H66TJ8XBW&source=url" color="primary">Donate</MDBBtn>
      </MDBNavbar>
    );
  }
}

export default NavBar;
