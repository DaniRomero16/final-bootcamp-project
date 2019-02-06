import React, { Component, Fragment } from 'react';
import styles from './navbar.styles.css';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBContainer,
  MDBIcon,
} from 'mdbreact';
import { logo2 } from '@Assets';

export class NavBar extends Component {
  state = {
    collapseID: '',
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : '',
    }));
  render() {
    return (
      <MDBContainer>
        <MDBNavbar
          className={styles.navbar}
          scrolling
          color="unique-color-dark"
          dark
          expand="md"
          fixed="top">
          <MDBNavbarBrand>
            <a href="/">
              <img alt="logo" src={logo2} className={styles.logo} />
            </a>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse('navbarCollapse3')} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="#!">
                  <MDBIcon icon="envelope" className="mr-1" />
                  Contact
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="/login">
                  <MDBIcon icon="user" className="mr-1" />
                  LOGIN / SIGNUP
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <MDBIcon icon="user" className="mr-1" />
                    Profile
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default" right>
                    <MDBDropdownItem href="#!">My account</MDBDropdownItem>
                    <MDBDropdownItem href="#!">Log out</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </MDBContainer>
      // <div className={styles.root}>
      //   <AppBar position="static">
      //     <Toolbar>
      //       <IconButton className={styles.menuButton} color="inherit" aria-label="Menu">
      //         <MenuIcon />
      //       </IconButton>
      //
      //       <Typography variant="h6" color="inherit" className={styles.grow} />
      //       <MDBBtn href="/login" color="elegant">
      //         Login / Signup
      //       </MDBBtn>
      //     </Toolbar>
      //   </AppBar>
      // </div>
    );
  }
}
