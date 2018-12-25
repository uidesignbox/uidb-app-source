import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './searchform.scss';

class SearchForm extends React.Component {
   componentDidMount() {
      this.input.focus();
   }

    render() {
      return (
         <div className="search-form__container">
            <form id="searchFormHeader" className="search-form__header" action="/search">
               <label htmlFor="q" name="search" type="hidden" className="hidden-label">Search website</label>
               <input type="search" name="q" autoComplete="off" maxLength="25" placeholder="Search anything" ref={(val) => this.input = val } />
               <button type="submit" className="search-form__btn" title="Search website form button">
                  <FontAwesomeIcon icon="search" />
               </button>
            </form>
         </div>
      );
   }
};

export default SearchForm;