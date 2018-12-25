import React, { Component } from 'react';
import LoaderHOC from '../../HOC/LoaderHOC';
import SearchItem from './SearchItem';

class SearchBody extends Component {
   render() {
      return(
         <section className="page__article-wrapper">
            { this.props.results.map(item => (
               <SearchItem key={item.id} info={item} />
            )) }
         </section>
      )
   }
};

export default LoaderHOC('results')(SearchBody);