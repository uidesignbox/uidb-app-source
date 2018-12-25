import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

// Global reset stylesheet
import "../../sass/global-reset.scss";

export default ({ children }) => (
  <main>
    <Header />
      { children }
    <Footer />
  </main>
);
