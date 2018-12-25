import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SearchHeader extends Component {
   handleSubmit(query) {
      return event => {
         event.preventDefault();
         this.props.fetch(query.value);
      }
   }

   render() {
      return (
         <section className="search__header page-header__container">
            <header>
               <h3 className="search-inner__landing">You searched for</h3>
            </header>
            <form className="search-form__landing" onSubmit={this.handleSubmit(this.input)}>
               <label htmlFor="q" hidden>Search site for content</label>
               <input type="search" name="q" autoComplete="off" ref={ val => this.input = val } />
               <button type="submit" title="Search website button">
                  <FontAwesomeIcon icon="search" />
               </button>
            </form>
         </section>
      )
   }
}

export default SearchHeader;