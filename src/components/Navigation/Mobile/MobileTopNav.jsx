import React, { Component } from 'react';
import { Link } from "gatsby";
import MobileTopSubMenu from './MobileTopSubMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MobileTopNav extends Component {
   constructor() {
      super();
      this.state = {
         activeMenu: null
      }
      this.toggleSubMenu = this.toggleSubMenu.bind(this);
   }

   toggleSubMenu(val) {
      if (this.state.activeMenu === val) {
         this.setState({ activeMenu: null });
         return;
      }
      this.setState({ activeMenu: val });
   }

   render() {
      const menu = this.props.menu.wordpressWpApiMenusMenusItems.items
      return(
         <ul>
            {menu.map((item, i) =>
               <li key={i} className="mobile-menu__item">
                  <Link to={`/page/${item.object_slug}`} className="top-link">{ item.title }</Link>
                  {item.wordpress_children && 
                     <FontAwesomeIcon icon="caret-down"
                        className={`icon ${this.state.activeMenu === i ? 'active': ''}`} 
                        onClick={() => this.toggleSubMenu(i)} />}
                  {item.wordpress_children && this.state.activeMenu === i &&
                     <MobileTopSubMenu children={item.wordpress_children} /> }
               </li>
            )}
            <li className="mobile-menu__item">
               <Link to="/archive/" className="top-link">All Articles</Link>
            </li>
         </ul>
      );
   }
};

export default MobileTopNav;