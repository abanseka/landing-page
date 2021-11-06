import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Components/Header/Header';
import Features from './Components/Features/Features';
import Contents from './Components/Contents/Contents';
import Gallery from './Components/Gallery/Gallery';
import Partners from './Components/Partners/Partners';
import Testimonials from './Components/Testimonials/Testimonials';
import Cta from './Components/Cta/Cta';
import Footer from './Components/Footer/Footer';

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

