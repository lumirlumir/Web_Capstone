import React from 'react';

import './SectionL.scss'

/**
 *
 * @returns SectionL
 */
const SectionL = () => {
  return (
    <section className='SectionL'>
      <strong>SectionL</strong>
      <div>Hello React!</div>
      <div>.env: process.env.TEST={process.env.TEST}</div>
    </section>
  );
}

export default SectionL;
