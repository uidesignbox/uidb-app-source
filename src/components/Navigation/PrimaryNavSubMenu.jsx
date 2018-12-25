import React from 'react';
import { Link } from 'gatsby';

const PrimaryNavSubMenu = (props) => (
   <ul className="sub__menu">
      {props.children.map((item, i) => {
         const type = item.type === 'taxonomy' ? item.type_label.toLowerCase() : 'page';
         return(
            <li key={i} className="sub__menu--item">
               <Link to={`${type}/${item.title.replace(/\s/g , "-").toLowerCase()}`}>
                  { item.title }
               </Link>
            </li>
         )
      })}
   </ul>
);

export default PrimaryNavSubMenu;