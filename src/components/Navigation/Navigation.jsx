import React, { PureComponent } from 'react';
import { StaticQuery, graphql } from "gatsby";
import NavigationMenu from './NavigationMenu';
import './navigation-main.scss';

class Navigation extends PureComponent {
  render() {
    return (
      <StaticQuery
        query={graphql`
          {
            wordpressWpApiMenusMenusItems(name: {eq: "Header Menu"}) {
              items {
                order
                title
                object_slug
                type
                type_label
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
          <section className="header-mobile--wrapper">
            <nav className="header__nav">
              <NavigationMenu items={data} />
            </nav>
          </section>
        )}
      />
    );
  }
}

export default Navigation;