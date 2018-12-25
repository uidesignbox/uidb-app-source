import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialIcons = () => (
   <ul className="social__icons">
      <li>
         <a href="https://www.instagram.com/uidesignbox/" className="icon" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'instagram']} />
            <span>Instagram</span>
         </a>
      </li>
      <hr/>
      <li>
         <a href="https://twitter.com/uidesignbox" className="icon" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'twitter']} />
            <span>Twitter</span>
         </a>
      </li>
   </ul>
)

export default SocialIcons;
