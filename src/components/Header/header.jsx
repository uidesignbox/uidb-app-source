import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import HamburgerMenu from './HamburgerMenu';
import Navigation from '../Navigation/Navigation';
import ModalOverlay from '../commons/ModalOverlay';
import SearchForm from '../Search/SearchForm';
import Helmet from 'react-helmet';
import Logo from '../commons/Logo';

import favicon from '../../assets/favicon.ico';
import '../commons/Icon';
import './header.scss';

class Header extends PureComponent {
  constructor() {
    super();
    this.state = {
      isMenuOpen: false,
      isSearchOpen: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);
    this.closeMenuEsc = this.closeMenuEsc.bind(this);
  };

  closeMenuEsc(event) {
    if ((this.state.isMenuOpen || this.state.isSearchOpen) && event.keyCode === 27) {
      this.setState({
        isMenuOpen: false,
        isSearchOpen: false
      });
    }
  };

  toggleSearch() {
    this.setState(prevState => ({
      isSearchOpen: !prevState.isSearchOpen,
      isMenuOpen: false
    }));
  };

  toggleMenu() {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen,
      isSearchOpen: false
    }));
  };

  componentDidMount() {
    document.addEventListener("keydown", this.closeMenuEsc, false);
    console.info('Development by http://www.eloydev.com - @eloyce');
  };

  componentWillUnmount() {
    document.removeEventListener("keydown", this.closeMenuEsc, false);
  }

  render() {
    return (
      <div className="header-nav__container">
        <Helmet
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` },
          ]}
        />
        <button className="header-btn__toggle--menu" onClick={this.toggleMenu}>
          <FontAwesomeIcon icon="bars" />
        </button>

        {this.state.isMenuOpen &&
          <HamburgerMenu toggle={this.toggleMenu} />}

        <div className="header__logo">
          <Logo siteTitle={this.props.siteTitle} />
        </div>

        <Navigation />

        <div className="header__search--icon" onClick={this.toggleSearch}>
          <FontAwesomeIcon icon="search" size="lg" />
        </div>

        {this.state.isSearchOpen ? <SearchForm toggle={this.toggleSearch} /> : null}

        {this.state.isMenuOpen ? <ModalOverlay /> : null}
      </div>
    )
  }
};

export default Header;