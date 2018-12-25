import React from 'react';
import MobileTopNav from './MobileTopNav';
import MobileSecondaryNav from './MobileSecondaryNav';
import { StaticQuery, graphql } from 'gatsby';

const Navigation = () => (
   <StaticQuery
   query={ graphql`
    {
      wordpressWpApiMenusMenusItems(name: {eq: "Header Menu"}) {
        items {
          order
          title
          object_slug
          wordpress_children {
            wordpress_id
            title
            object_slug
            type
            type_label
          }
        }
      }
    }
   `}
    render={data => (
        <div className="header-mobile--wrapper">
            <nav>
              <MobileTopNav menu={data} />
              <MobileSecondaryNav />
            </nav>
        </div>
      )}
    />
);

export default Navigation;
