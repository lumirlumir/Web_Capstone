import React from 'react';
import { GoGear } from 'react-icons/go';
import { CiMicrophoneOn } from 'react-icons/ci';

import CompFontNeon from '@/components/CompFontNeon';

import './Header.scss';

/**
 *
 * @returns Header
 */
function Header() {
  return (
    <header className="Header">
      <div className="button">
        <GoGear size="40px" />
      </div>
      <div className="heading">
        {' '}
        <div className="heading">
          <div className="mock">
            <CompFontNeon neonColor="blue" neonSize="m" fontFamily="Pacifico" fontSize="20px">
              <h1>Mock</h1>
            </CompFontNeon>
          </div>
          <div className="interview">
            <CompFontNeon neonColor="violet" neonSize="l" fontFamily="Audiowide" fontSize="40px">
              <h1>Interview</h1>
            </CompFontNeon>
          </div>
        </div>
      </div>
      <div>
        <CiMicrophoneOn size="50px" />
      </div>
    </header>
  );
}

export default Header;
