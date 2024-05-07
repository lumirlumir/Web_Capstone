import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import CompFontNeon from '@/components/CompFontNeon';
import CompDivNeon from '@/components/CompDivNeon';
import CompButtonLight from '@/components/CompButtonLight';
import URL from '@/constants';

import './Start.scss';

/**
 *
 * @returns Start
 */
function Start() {
  const [buttonState, setButtonState] = useState('onPress'); // onPress, onStart, off
  const handleButtonState = () => {
    setButtonState(buttonState === 'onPress' ? 'off' : 'onStart');
  };

  return (
    <div className="Start">
      <div>
        <div className="heading">
          <div className="mock">
            <CompFontNeon neonColor="blue" neonSize="m" fontFamily="Pacifico" fontSize="50px">
              <h1>Mock</h1>
            </CompFontNeon>
          </div>
          <div className="interview">
            <CompFontNeon neonColor="purple" neonSize="l" fontFamily="Audiowide" fontSize="100px">
              <h1>Interview</h1>
            </CompFontNeon>
          </div>
        </div>
        <CompDivNeon className={`config ${buttonState}`} neonColor="green" neonSize="l" borderWidth="">
          <div>
            <input type="checkbox" onChange={handleButtonState} />
            Configuration Check Boxes
          </div>
        </CompDivNeon>
        <div className={`button ${buttonState}`}>
          <CompButtonLight onClick={handleButtonState}>
            <CompFontNeon neonColor="white" neonSize="s" fontFamily="Audiowide" fontSize="40px">
              {buttonState === 'onStart' ? <Link to={URL.interview}>START</Link> : 'PRESS'}
            </CompFontNeon>
          </CompButtonLight>
        </div>
      </div>
    </div>
  );
}

export default Start;
