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
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default Interview;
