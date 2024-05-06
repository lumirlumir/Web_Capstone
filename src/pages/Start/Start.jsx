import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import CompFontNeon from '../../components/font/CompFontNeon';
import CompButtonLight from '../../components/button/CompButtonLight';

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
            <CompFontNeon neonColor="violet" neonSize="l" fontFamily="Audiowide" fontSize="100px">
              <h1>Interview</h1>
            </CompFontNeon>
          </div>
        </div>
        <div className={`config ${buttonState}`}>
          <input type="checkbox" onChange={handleButtonState} />
          Configuration Check Boxes
        </div>
        <div className={`button ${buttonState}`}>
          <CompButtonLight onClick={handleButtonState}>
            <CompFontNeon neonColor="white" neonSize="s" fontFamily="Audiowide" fontSize="40px">
              {buttonState === 'onStart' ? <Link to="/Interview">START</Link> : 'PRESS'}
            </CompFontNeon>
          </CompButtonLight>
        </div>
      </div>
    </div>
  );
}

export default Start;
