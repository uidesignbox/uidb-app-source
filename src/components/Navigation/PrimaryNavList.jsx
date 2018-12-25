import React, { Component } from 'react';
import { Link } from "gatsby";
import PropTypes from 'prop-types';
import PrimaryNavSubMenu from './PrimaryNavSubMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class PrimaryNavList extends Component {
   constructor() {
      super();
      this.state = {
         activeMenu: null
      }
      this.toggleMenu = this.toggleMenu.bind(this);
   }

   toggleMenu(val) {
      if (this.state.activeMenu === val) {
         this.setState({ activeMenu: null });
         return
      }
      this.setState({ activeMenu: val });
   }

   render() {
      const menu = this.props.items;
      return (
         <ul className="header__nav-list">
            {menu.map((item, i) => {
               var path = '';
               if (item.type === 'taxonomy') {
                  path = `/${item.type_label.toLowerCase()}/${item.title.replace(/\s/g , "-").toLowerCase()}`
               } else if (item.type_label === 'Page') {
                  path = `/page/${item.object_slug}`
               }
               return (
                  <li key={i}>
                     <Link to={`${path}`} activeClassName="active">{item.title}</Link>
                     {item.wordpress_children && this.state.activeMenu === i &&
                        <PrimaryNavSubMenu children={item.wordpress_children} /> }
                     {item.wordpress_children &&
                        <FontAwesomeIcon
                        icon="caret-down"
                        className={`icon ${this.state.activeMenu === i ? 'active':''}`}
                        onClick={() => this.toggleMenu(i)} />}
                  </li>
                  )
               }
            )}
         </ul>
      )
   }
};

PrimaryNavList.propTypes = {
   items: PropTypes.array
}

export default PrimaryNavList;