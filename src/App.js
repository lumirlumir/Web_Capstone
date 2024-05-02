import React from 'react';

import Header from './layouts/Header'
import Main from './layouts/Main'
import Footer from './layouts/Footer'

import './App.scss'

/**
 *
 * @returns App
 */
const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
