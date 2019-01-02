import React from 'react';
import GlobalLayout from '../components/Layout/GlobalLayout';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import '../components/Pages/page.scss';

import MainContainer from '../components/Layout/MainContainer';
import TwoThirdsCol from '../components/Layout/TwoThirdsCol';

const PrivacyPolicy = () => {
   return(
      <StaticQuery
         
         render={data => (
            <GlobalLayout>
               <Helmet
                  title={`Privacy Policy | UiDesignBox`}
                  meta={[
                     { name: "description", content: `Privacy policy for UiDesignBox`}
                  ]}
               />
               <section className="page-header__container">
                  <h1>{data.wordpressPage.title}</h1>
               </section>
               <MainContainer>
                  <TwoThirdsCol>
                     <div className="privacy-policy__container" dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }}></div>
                  </TwoThirdsCol>
               </MainContainer>
            </GlobalLayout>
         )}
      />
   )
};

export default PrivacyPolicy;