import React from 'react';
import { GrPowerReset } from 'react-icons/gr';

import CompButtonLight from '@/components/CompButtonLight';
import CompFontNeon from '@/components/CompFontNeon';

import './FooterL.scss';

/**
 *
 * @returns FooterL
 */
function FooterL() {
  const doNothing = () => {};

  return (
    <footer className="FooterL">
      <CompButtonLight style={{ width: '60px', height: '60px' }} onClick={doNothing}>
        <CompFontNeon neonColor="white">
          <GrPowerReset size="32px" />
        </CompFontNeon>
      </CompButtonLight>
    </footer>
  );
}

export default FooterL;
