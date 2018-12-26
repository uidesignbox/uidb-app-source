import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import NavigationItem from './NavigationItem';

class NavigationMenu extends PureComponent {
  constructor() {
    super();
    this.state = { activeMenu: null }
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu(val) {
    if (this.state.activeMenu === val) {
      this.setState({ activeMenu: null });
      return;
    }

    this.setState({ activeMenu: val });
  };

  render() {
    return (
      <ul className="header__nav-list">
        {this.props.menu.map((item, i) => 
          <NavigationItem
            key={i}
            slug={item.slug}
            title={item.title}
            toggleMenu={this.toggleMenu}
          />
        )}
      </ul>
    )
  }
};

NavigationMenu.propTypes = {
  items: PropTypes.array
}

export default NavigationMenu;