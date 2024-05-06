import React from 'react';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import './Interview.scss';

/**
 *
 * @returns Interview
 */
function Interview() {
  return (
    <div className="Interview">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default Interview;
