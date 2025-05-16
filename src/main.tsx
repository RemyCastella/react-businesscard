import React from 'react';
import ReactDOM from 'react-dom/client';
import About from './About';
import Header from './Header';
import Interests from './Interests';
import Footer from './Footer';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <About />
    <Interests />
    <Footer />
  </React.StrictMode>
);
