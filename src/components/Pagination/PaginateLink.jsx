import React from 'react';
import { Link } from 'gatsby';

const PaginateLink = (props) => {
   return (
      <li>
         <Link className="paginate__item" to={props.url === 1 ? '/': props.url.toString()}>
            {props.url}
         </Link>
      </li>
   );
};

export default PaginateLink;
