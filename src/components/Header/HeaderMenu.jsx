import React from 'react';
import MobileNavigation from '../Navigation/Mobile/MobileNavigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './header.scss';

export default class HeaderMenu extends React.Component {
   render() {
      return(
         <div className="header-mobile__menu">
            <button className="header-mobile__close" title="Close mobile menu button" onClick={ this.props.toggle }>
                <FontAwesomeIcon icon="times"/>
            </button>
            <MobileNavigation />
         </div>
      )
   }
};
