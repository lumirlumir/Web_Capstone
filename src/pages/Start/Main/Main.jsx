import React, { useState } from 'react';

import CompFontNeon from '@/components/CompFontNeon';
import CompDivNeon from '@/components/CompDivNeon';
import CompButtonLight from '@/components/CompButtonLight';

import Heading from './Heading';

import './Main.scss';

/**
 *
 * @returns Main
 */
function Main() {
  const [buttonState, setButtonState] = useState('onPress'); // onPress, onStart, off
  const handleButtonState = () => {
    setButtonState(buttonState === 'onPress' ? 'off' : 'onStart');
  };

  return (
    <main className="Main">
      <div>
        <Heading />
        <CompDivNeon className={`config ${buttonState}`} neonColor="banana">
          <div>
            <input type="checkbox" onChange={handleButtonState} />
            Configuration Check Boxes
          </div>
        </CompDivNeon>
        <CompDivNeon className="test" neonColor="black">
          $ Chat-GPT <br />
          <br />
          &gt; 안녕하세요 Chat-GPT를 활용한 인터뷰 서비스에 오신 것을 환영합니다. <br /> &gt; 해당 인터뷰 서비스는 CS, FE, BE, DB, OOP 총 5가지 분야에 대한 지식을 평가합니다.
        </CompDivNeon>
        <div className={`button ${buttonState}`}>
          <CompButtonLight style={{ padding: '20px 30px' }} onClick={handleButtonState}>
            <CompFontNeon neonColor="white" neonSize="s" fontFamily="Audiowide" fontSize="40px">
              {buttonState === 'onStart' ? 'START' : 'PRESS'}
            </CompFontNeon>
          </CompButtonLight>
        </div>
      </div>
    </main>
  );
}

export default Main;
