import React from 'react';
import { Link } from 'gatsby';

const FooterLinkItem = (props) => (
   <li>
      <Link to={props.data.object_slug}>{props.data.title}</Link>
   </li>
);

export default FooterLinkItem;