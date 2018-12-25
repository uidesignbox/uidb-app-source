import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import FooterLinkItem from './FooterLinkItem';

const FooterLinks = () => (
   <StaticQuery
   query={graphql`
      {
      wordpressWpApiMenusMenusItems(name: {eq: "Footer Menu"}) {
         items {
            order
            title
            object_slug
         }
         }
      }
   `}
    render={data => (
         <ul className="footer__list">
            {data.wordpressWpApiMenusMenusItems.items.map((item, index) => (
               <FooterLinkItem key={index} data={item} />
            ))}
        </ul>
      )}
    />
)

export default FooterLinks;
