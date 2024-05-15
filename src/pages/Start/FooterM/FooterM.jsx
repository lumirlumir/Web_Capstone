import React from 'react';

import CompFontNeon from '@/components/CompFontNeon';

import './FooterM.scss';

/**
 *
 * @returns FooterM
 */
function FooterM() {
  return (
    <footer className="FooterM">
      <CompFontNeon neonSize="s" fontFamily="audiowide" fontSize="35px">
        59:59:59
      </CompFontNeon>
    </footer>
  );
}

export default FooterM;
