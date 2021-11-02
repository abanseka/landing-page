import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Features from './Features';
import Contents from './Contents';
import Gallery from './Gallery';
import Partners from './Partners';
import Testimonials from './Testimonials';
import Cta from './Cta';
import Footer from './Footer';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Features />
    <Contents />
    <Gallery />
    <Partners />
    <Testimonials />
    <Cta />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

