import React from 'react';
import { Link } from "gatsby";
import HeaderMenu from './HeaderMenu';
import PrimaryNav from '../Navigation/PrimaryNav';
import ModalOverlay from '../commons/ModalOverlay';
import SearchForm from '../Search/SearchForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Helmet from 'react-helmet';

import favicon from '../../assets/favicon.ico';
import logo from '../../assets/logo.png';
import '../commons/Icon';
import './header.scss';


export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      isMenuOpen: false,
      isSearchOpen: false,
    }

    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);
    this.closeMenuEsc = this.closeMenuEsc.bind(this);
  }
  
  closeMenuEsc(event) {
    if ( (this.state.isMenuOpen || this.state.isSearchOpen) && event.keyCode === 27) {
      this.setState({
        isMenuOpen: false,
        isSearchOpen: false
      });
    }
  }

  toggleSearch() {
    this.setState(prevState => ({
      isSearchOpen: !prevState.isSearchOpen,
      isMenuOpen: false
    }));
  }

  toggleMenu() {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen,
      isSearchOpen: false
    }));
  }

  componentDidMount() {
    document.addEventListener("keydown", this.closeMenuEsc, false);
    console.info('Development by http://www.eloydev.com - @awesomekangaroo');
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.closeMenuEsc, false);
  }

  render() {
    return(
      <div className="header-nav__container">
        <Helmet
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
          ]}
        />
        <button className="header-btn__toggle--menu" onClick={ this.toggleMenu }>
          <FontAwesomeIcon icon="bars" />
        </button>

        { this.state.isMenuOpen ? <HeaderMenu toggle={ this.toggleMenu } /> : null }

        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt={`Brand logo for ${this.props.siteTitle}`} />
          </Link>
        </div>

        <PrimaryNav />

        <div className="header__search--icon" onClick={ this.toggleSearch }>
          <FontAwesomeIcon icon="search" size="lg" />
        </div>

        { this.state.isSearchOpen ? <SearchForm toggle={this.toggleSearch} /> : null }

        { this.state.isMenuOpen ? <ModalOverlay /> : null }
      </div>
    )
  }
};
