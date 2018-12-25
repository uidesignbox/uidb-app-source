import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import logo from '../../assets/logo'

const Logo = ({ siteTitle, path }) => (
  <Link to={path || '/'}>
    <img src={logo} alt={`Brand logo for ${siteTitle}`} />
  </Link>
);

Logo.propTypes = {
  siteTitle: PropTypes.string,
  path: PropTypes.string
};

export default Logo;