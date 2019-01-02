import React from 'react';
import GlobalLayout from '../components/Layout/GlobalLayout';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

// import ContactForm from '../components/Contact/ContactForm';
import MainContainer from '../components/Layout/MainContainer';
import TwoThirdsCol from '../components/Layout/TwoThirdsCol';
import '../components/Pages/page.scss';
import '../components/Contact/contact.scss';

const ContactPage = () => (
   <StaticQuery
      
      render={data => (
         <GlobalLayout>
            <Helmet
               title={`${data.wordpressPage.title} | UiDesignBox`}
               meta={[
                  { name: "description", content: `${data.wordpressPage.acf.meta_description}`}
               ]}
            />
            <section className="page-header__container">
               <h1>{data.wordpressPage.title}</h1>
            </section>
            <MainContainer>
               <TwoThirdsCol>
                  <section className="contact__landing">
                     <div dangerouslySetInnerHTML={{ __html: data.wordpressPage.content }}></div>
                     {/* <ContactForm /> */}
                  </section>
               </TwoThirdsCol>
            </MainContainer>
         </GlobalLayout>
      )}
   />
);

export default ContactPage;