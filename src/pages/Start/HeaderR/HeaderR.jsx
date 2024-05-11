import React from 'react';
import { GrPowerReset } from 'react-icons/gr';

import CompButtonLight from '@/components/CompButtonLight';
import CompFontNeon from '@/components/CompFontNeon';

import './HeaderR.scss';

/**
 *
 * @returns HeaderR
 */
function HeaderR() {
  const doNothing = () => {};

  return (
    <header className="HeaderR">
      <CompButtonLight style={{ width: '60px', height: '60px' }} onClick={doNothing}>
        <CompFontNeon neonColor="white">
          <GrPowerReset size="32px" />
        </CompFontNeon>
      </CompButtonLight>
    </header>
  );
}

export default HeaderR;
