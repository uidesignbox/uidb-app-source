import React, { Fragment } from 'react';
import { Link } from "gatsby";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavigationSubMenu from './NavigationSubMenu';

const NavigationItem = ({ slug, subItems, title, toggleMenu }) => (
  <li>
    <Link to={slug} activeClassName="active">{title}</Link>
    {subItems &&
      <Fragment>
        <NavigationSubMenu submenu={subItems} />
        <FontAwesomeIcon
          icon="caret-down"
          className={`icon active`}
          onClick={() => toggleMenu(i)} />
      </Fragment>
    }
  </li>
);

NavigationItem.propTypes = {
  slug: PropTypes.string.isRequired,
  subItems: PropTypes.array,
  title: PropTypes.string,
  toggleMenu: PropTypes.func,
};

export default NavigationItem;