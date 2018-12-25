import React, { Component } from 'react';

class ContactForm extends Component {
   render() {
      return(
         <form action="#" className="contact-us__form">
            <div className="form-section flex__item">
               <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name"/>
               </div>
               <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="text" name="email" required/>
               </div>
            </div>
            <div className="form-section">
               <label htmlFor="topic">Topics</label>
               <select name="topics" id="contactTopics" required>
                  <option value="Select an option...">Select an option...</option>
                  <option value="Correction">Correction</option>
                  <option value="Webpage issue">Webpage issue</option>
                  <option value="Feedback">Feedback</option>
                  <option value="Word to the author">Word to the author</option>
                  <option value="Other">Other</option>
               </select>
            </div>
            <div className="form-section">
               <label htmlFor="message">Your message: </label>
               <textarea name="message" id="contactMessage" cols="30" rows="7" required></textarea>
            </div>
            <button type="submit" className="submit--btn">Submit</button>
         </form>
      )
   }
};

export default ContactForm;