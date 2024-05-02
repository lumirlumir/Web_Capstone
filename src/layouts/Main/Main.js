import React from 'react';

import SectionL from './SectionL'
import SectionR from './SectionR'

import './Main.scss'

/**
 *
 * @returns Main
 */
const Main = () => {
  return (
    <main>
      <strong>main</strong>
      <SectionL />
      <SectionR />
    </main>
  );
}

export default Main;
