import React, { Component } from 'react';
import styles from './profnavbar.styles.css';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBCollapse,
  MDBContainer,
  MDBHamburgerToggler,
  MDBIcon,
} from 'mdbreact';

export class ProfNavbar extends Component {
  state = {
    collapse1: false,
    collapseID: '',
  };

  toggleCollapse = collapseID => () => {
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : '',
    }));
  };

  toggleSingleCollapse = collapseId => {
    this.setState({
      ...this.state,
      [collapseId]: !this.state[collapseId],
    });
  };

  render() {
    return (
      <MDBContainer>
        <MDBNavbar className={styles.navbar} style={{ marginTop: '20px' }} scrolling dark>
          <MDBContainer>
            <MDBNavbarBrand>
              <MDBIcon icon="toolbox" className="mx-4" />
              UTILITIES
            </MDBNavbarBrand>
            <MDBHamburgerToggler
              color="#19E9D9"
              id="hamburger1"
              onClick={() => this.toggleSingleCollapse('collapse1')}
            />
            <MDBCollapse isOpen={this.state.collapse1} navbar>
              <MDBNavbarNav left>
                <MDBNavItem className="ml-5">
                  <MDBNavLink to="/profile/diary">Diary</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className="ml-5">
                  <MDBNavLink to="/profile/goals">Goals</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className="ml-5">
                  <MDBNavLink to="/profile/comparisons">Comparisons</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className="ml-5">
                  <MDBNavLink to="/profile/graphics">Graphics</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className="ml-5">
                  <MDBNavLink to="/profile/lists">Lists</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      </MDBContainer>
    );
  }
}
