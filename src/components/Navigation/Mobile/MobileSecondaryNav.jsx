import React from 'react';
import { Link } from "gatsby";

export default class MobileSecondaryNav extends React.Component {
    render() {
        return(
            <ul className="mobile-menu__secondary">
                <li>
                    <Link to="/about">About UiDesignBox</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                {/* <li>
                    <Link to="/faq">FAQS</Link>
                </li> */}
            </ul>
        );
    }
};
