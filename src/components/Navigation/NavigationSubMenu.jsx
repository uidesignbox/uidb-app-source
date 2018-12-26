import React from 'react';
import { Link } from 'gatsby';

const NavigationSubMenu = ({ submenu }) => (
  <ul className="sub__menu">
    {submenu.map((item, i) => {
      return (
        <li key={i} className="sub__menu--item">
          <Link to={item.slug}>
            {item.title}
          </Link>
        </li>
      )
    })}
  </ul>
);

export default NavigationSubMenu;