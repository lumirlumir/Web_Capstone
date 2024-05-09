import React from 'react';
import { GoGear } from 'react-icons/go';
import { CiMicrophoneOn } from 'react-icons/ci';

import CompFontNeon from '@/components/CompFontNeon';
import CompDivNeon from '@/components/CompDivNeon';

import './Header.scss';

/**
 *
 * @returns Header
 */
function Header() {
  return (
    <CompDivNeon className="Header" neonColor="banana" neonSize="xs" borderWidth="2px">
      <div className="button">
        <CompFontNeon neonColor="blue" neonSize="xs" fontFamily="Pacifico" fontSize="20px">
          <GoGear className="config" size="40px" color="#f5e3a7" />
        </CompFontNeon>
      </div>
      <div className="heading">
        {' '}
        <div className="heading">
          <div className="mock">
            <CompFontNeon neonColor="blue" neonSize="s" fontFamily="Pacifico" fontSize="20px">
              <h1>Mock</h1>
            </CompFontNeon>
          </div>
          <div className="interview">
            <CompFontNeon neonColor="violet" neonSize="s" fontFamily="Audiowide" fontSize="40px">
              <h1>Interview</h1>
            </CompFontNeon>
          </div>
        </div>
      </div>
      <div>
        <CiMicrophoneOn className="mic" size="50px" color="#f5e3a7" />
      </div>
    </CompDivNeon>
  );
}

export default Header;
