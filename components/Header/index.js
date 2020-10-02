import React from 'react';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import NavBar from './NavBar';
import Img from './Img';
import Banner from './banner.png';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <div>
        <Img src={Banner} alt="banner Logo" title="moon" />
        <NavBar>
          <NavLink to="/search" style={{ textDecoration: 'none' }}>
            <Button variant="outlined" color="primary[900]">
              Personnages Marvel
            </Button>
          </NavLink>
          <NavLink to="/search2" style={{ textDecoration: 'none' }}>
            <Button
              variant="outlined"
              color="primary[900]"
              style={{ marginLeft: '2em' }}
            >
              Comics Events
            </Button>
          </NavLink>
          <NavLink to="/search3" style={{ textDecoration: 'none' }}>
            <Button
              variant="outlined"
              color="primary[900]"
              style={{ marginLeft: '2em' }}
            >
              Comics Series
            </Button>
          </NavLink>
        </NavBar>
      </div>
    );
  }
}

export default Header;
