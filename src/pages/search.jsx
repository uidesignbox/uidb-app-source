import React, { Component } from 'react';
import Helmet from 'react-helmet';
import GlobalLayout from '../components/Layout/GlobalLayout';
import MainContainer from '../components/Layout/MainContainer';
import TwoThirdsCol from '../components/Layout/TwoThirdsCol';
import '../components/Pages/page.scss';
import '../components/Search/searchform.scss';

import SearchBody from '../components/Search/SearchPage/SearchBody';
import SearchHeader from '../components/Search/SearchPage/SearchHeader';

class SearchTemplate extends Component {
   constructor() {
      super();
      this.state = {
         data: []
      }

      this.fetchData = this.fetchData.bind(this);
      this.getUrlParams = this.getUrlParams.bind(this);
   }

   getUrlParams() {
      let params = new URLSearchParams(window.location.search);
      return params.get('q');
   }

   fetchData(query) {
      let url = `https://n604m2xvyh.execute-api.us-east-1.amazonaws.com/search?search=${query}`;
      // let url = `http://localhost:8888/uidesignbox/ui-db-localhost/wp-json/wp/v2/posts?search=${query}&_embed`;
      fetch(url)
      .then(res => res.json())
      .then(res => this.setState({ data: res }))
      .catch(error => console.log('ERROR:', error))
   }

   componentDidMount() {
      // Get query params then fetch data.
      this.fetchData(this.getUrlParams());
   }

   render() {
      return (
         <GlobalLayout>
            <Helmet
               title={`Search | UiDesignBox`}
               meta={[
                  { name: "description", content: `Search page for UiDesignBox`}
               ]}
            />
            <MainContainer>
               <SearchHeader fetch={this.fetchData} />
               <TwoThirdsCol>
                  <SearchBody results={this.state.data} />
               </TwoThirdsCol>
            </MainContainer>
         </GlobalLayout>
      )
   }
}

export default SearchTemplate;