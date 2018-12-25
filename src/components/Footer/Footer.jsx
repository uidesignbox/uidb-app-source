import React from 'react';
import SocialIcons from '../commons/SocialIcons';
import FooterLinks from './FooterLinks';
import { Link } from 'gatsby';
import logo from '../../assets/logo.png';
import './footer.scss';

export default class Footer extends React.Component {
    render() {
        return(
            <footer className="footer__container">
               <div className="container__max">
                  <section className="flex__container">
                     <div className="footer__logo">
                        <Link to="/">
                           <img src={ logo } alt={`Brand logo for UiDesignBox`} />
                        </Link>
                     </div>
                     <SocialIcons />
                  </section>
                  <FooterLinks />
               </div>
            </footer>
        )
    }
};
