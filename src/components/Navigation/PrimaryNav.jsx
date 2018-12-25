import React from 'react';
import { StaticQuery, graphql } from "gatsby";
import PrimaryNavList from './PrimaryNavList';
import './navigation-main.scss';

export default class PrimaryNav extends React.Component {
    render() {
        return(
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
                     <PrimaryNavList items={data.wordpressWpApiMenusMenusItems.items} />
                  </nav>
                </section>
              )}
            />
        );
    }
}