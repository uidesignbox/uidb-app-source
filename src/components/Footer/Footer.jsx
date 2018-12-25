import React, { PureComponent } from 'react';
import { Link } from 'gatsby';
import Logo from '../commons/Logo';
import SocialIcons from '../commons/SocialIcons';
import FooterLinks from './FooterLinks';
import './footer.scss';

class Footer extends PureComponent {
  render() {
    return (
      <footer className="footer__container">
        <div className="container__max">
          <section className="flex__container">
            <div className="footer__logo">
              <Logo siteTitle={this.props.siteTitle} />
            </div>
            <SocialIcons />
          </section>
          <FooterLinks />
        </div>
      </footer>
    )
  }
};

export default Footer;