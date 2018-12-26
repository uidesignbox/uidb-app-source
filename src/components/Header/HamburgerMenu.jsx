import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import './header.scss';

const HamburgerMenu = ({ toggleMenu }) => (
  <div className="header-mobile__menu">
    <button className="header-mobile__close" title="Close mobile menu button" onClick={toggleMenu}>
      <FontAwesomeIcon icon="times" />
    </button>
  </div>
);

HamburgerMenu.propTypes = {
  toggleMenu: PropTypes.func,
};

export default HamburgerMenu;