import React from 'react';

import SectionL from './SectionL';
import SectionR from './SectionR';

import './Main.scss';

/**
 *
 * @returns Main
 */
function Main() {
  return (
    <main className="Main">
      <SectionL />
      <SectionR />
    </main>
  );
}

export default Main;
