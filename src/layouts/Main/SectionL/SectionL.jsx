import React from 'react';

import './SectionL.scss';

/**
 *
 * @returns SectionL
 */
function SectionL() {
  if (process.env.TEST === '1234') {
    return (
      <section className="SectionL">
        <strong>SectionL</strong>
        <div>YES 환경변수 존재!!!!!!!!!!!</div>
      </section>
    );
  }

  return (
    <section className="SectionL">
      <strong>SectionL</strong>
      <div>NO 환경변수 없어............</div>
    </section>
  );
}

export default SectionL;
