import React from 'react';
import { GoGear } from 'react-icons/go';

import CompButtonLight from '@/components/CompButtonLight';
import CompFontNeon from '@/components/CompFontNeon';

import './HeaderL.scss';

/**
 *
 * @returns HeaderL
 */
function HeaderL() {
  const doNothing = () => {};

  return (
    <header className="HeaderL">
      <CompButtonLight style={{ width: '60px', height: '60px' }} click={doNothing}>
        <CompFontNeon neonColor="white">
          <GoGear size="35px" />
        </CompFontNeon>
      </CompButtonLight>
    </header>
  );
}

export default HeaderL;
