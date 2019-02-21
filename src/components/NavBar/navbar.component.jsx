import React, { Component, Fragment } from 'react';
import styles from './navbar.styles.css';
import { connect } from 'react-redux';
import { logoutUser } from '@Models';
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

class NavBar extends Component {
  state = {
    collapseID: '',
    user: '',
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : '',
    }));

  handleLogout = () => {
    this.props.logout();
  };
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
              {this.props.logged ? (
                <React.Fragment>
                  <MDBNavItem>
                    <MDBNavLink className="waves-effect waves-light" to="/diary">
                      <MDBIcon icon="book-open" className="mr-1" />
                      Diary
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink className="waves-effect waves-light" to="/goals">
                      <MDBIcon icon="bullseye" className="mr-1" />
                      Goals
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink className="waves-effect waves-light" to="/graphics">
                      <MDBIcon icon="chart-line" className="mr-1" />
                      Graphics
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink className="waves-effect waves-light" to="/comparisons">
                      <MDBIcon icon="exchange-alt" className="mr-1" />
                      Comparisons
                    </MDBNavLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBNavLink className="waves-effect waves-light" to="/lists">
                      <MDBIcon icon="tasks" className="mr-1" />
                      List
                    </MDBNavLink>
                  </MDBNavItem>
                </React.Fragment>
              ) : null}

              <MDBNavItem>
                {!this.props.logged ? (
                  <MDBNavLink className="waves-effect waves-light" to="/login">
                    <MDBIcon icon="user" className="mr-1" />
                    LOGIN / SIGNUP
                  </MDBNavLink>
                ) : null}
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  {this.props.logged ? (
                    <MDBDropdownToggle nav caret>
                      <MDBIcon icon="user" className="mr-1" />
                      {this.props.user.username}
                    </MDBDropdownToggle>
                  ) : null}
                  <MDBDropdownMenu className="dropdown-default" right>
                    <MDBDropdownItem href="/profile">My account</MDBDropdownItem>
                    <MDBDropdownItem onClick={this.handleLogout}>Log out</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </MDBContainer>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    ...props,
    logged: state.asyncReducer.isAuthenticated,
    user: state.asyncReducer.user,
  };
};

const mapDispatchToProps = {
  logout: logoutUser,
};

export const ConnectedNavBar = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);
