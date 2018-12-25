import React from 'react';
import { Link } from  'gatsby';

const MobileTopSubMenu = (props) => (
   <ul className="header-mobile__submenu">
      {props.children.map((item, i) => {
         const type = item.type === 'taxonomy' ? item.type_label.toLowerCase() : 'page';
         return (
            <li key={i} className="submenu__item">
               <Link to={`${type}/${item.title.replace(/\s/g , "-").toLowerCase()}`}>{ item.title }</Link>
            </li>
         )
      })}
   </ul>
);

export default MobileTopSubMenu;