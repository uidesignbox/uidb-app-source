import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SubscribeModal extends React.Component {
   render() {
      return(
         <div className="subscribe__modal">
            <button className="close-modal" title="Close subscribe modal button" onClick={this.props.toggle}>
               <FontAwesomeIcon icon="times" />
            </button>
            <header className="subscribe__modal-header">
               <h2>Subscribe to UiDesignBox newsletter.</h2>
               <p>Be the one who stays current with news delivered to your inbox!</p>
            </header>
            <form className="subscribe__modal-body">
               <p>Name (optional)</p>
               <label htmlFor="name" hidden>Name</label>
               <input type="text" name="name"/>
               <p>Email*</p>
               <label htmlFor="email" hidden>Email</label>
               <input type="text" name="email"/>
               <button type="submit">Subscribe</button>
               <small>Please & thank you.</small>
            </form>
         </div>
      )
   }
};

export default SubscribeModal;
