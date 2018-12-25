import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class ShareSocial extends Component {
   render(){
      return(
         <section className="share__social">
            <h2 className="share__social--head">Follow UiDesignBox</h2>
            <ul class="share__social-list">
               <li>
                  <a href="https://www.google.com">
                     <FontAwesomeIcon icon={['fab', 'facebook']} />
                  </a>
               </li>
               <li>
                  <hr className="divide"/>
               </li>
               <li>
                  <a href="https://www.google.com">
                     <FontAwesomeIcon icon={['fab', 'twitter']} />
                  </a>
               </li>
               <li>
                  <hr className="divide"/>
               </li>
               <li>
                  <a href="https://www.google.com">
                     <FontAwesomeIcon icon={['fab', 'instagram']} />
                  </a>
               </li>
            </ul>
         </section>
      )
   }
};