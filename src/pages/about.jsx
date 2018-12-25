import React from 'react';
import GlobalLayout from '../components/Layout/GlobalLayout';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import MainContainer from '../components/Layout/MainContainer';
import SubscribeFooterSection from '../components/Contact/SubscribeFooterSection';
import '../components/Pages/page.scss';

const AboutPage = () => (
   <StaticQuery
      query={graphql`
         {
            wordpressPage(title: {regex: "/About/"}) {
               content
               title
               acf {
                  meta_description
                }
            }
         }
      `}
      render={data => (
         <GlobalLayout>
            <Helmet
               title={`${data.wordpressPage.title} | UiDesignBox`}
               meta={[
                  { name: "description", content: `${data.wordpressPage.acf.meta_description}`}
               ]}
            />
            <section className="page-header__container">
               <p className="about--title">{data.wordpressPage.title}</p>
               <h1 className="about--description">Drawing a strong picture of user interface design and development comprehension through example.</h1>
            </section>
            <MainContainer>
              <section className="about__landing">
                  {data.wordpressPage.content &&
                     <div dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }}></div>}
              </section>
            </MainContainer>
            <SubscribeFooterSection />
         </GlobalLayout>
      )}
   />
);

export default AboutPage;