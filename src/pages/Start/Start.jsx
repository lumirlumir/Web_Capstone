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
        <CompDivNeon className={`config ${buttonState}`} neonColor="banana" neonSize="l" borderWidth="">
          <div>
            <input type="checkbox" onChange={handleButtonState} />
            Configuration Check Boxes
          </div>
        </CompDivNeon>
        <div className={`button ${buttonState}`}>
          <CompButtonLight onClick={handleButtonState} neonSize="" padding="" letterSpacing="">
            <CompFontNeon neonColor="white" neonSize="s" fontFamily="Audiowide" fontSize="40px">
              {buttonState === 'onStart' ? <Link to={URL.interview}>START</Link> : 'PRESS'}
            </CompFontNeon>
          </CompButtonLight>
        </div>
        <CompDivNeon className="test" neonColor="black" neonSize="l" borderWidth="2px">
          $ Chat-GPT <br />
          <br />
          &gt; 안녕하세요 Chat-GPT를 활용한 인터뷰 서비스에 오신 것을 환영합니다. <br /> &gt; 해당 인터뷰 서비스는 CS, FE, BE, DB, OOP 총 5가지 분야에 대한 지식을 평가합니다.
        </CompDivNeon>
      </div>
    </div>
  );
}

export default Start;
