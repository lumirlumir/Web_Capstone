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
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // 체크박스 상태 토글
  };

  return (
    <div className="Start">
      <div>
        <div className="heading">
          <div className="mock">
            <CompFontNeon neonColor="blue" neonSize="m" fontFamily="Pacifico" fontSize="50px">
              Mock
            </CompFontNeon>
          </div>
          <div className="interview">
            <CompFontNeon neonColor="violet" neonSize="l" fontFamily="Audiowide" fontSize="100px">
              Interview
            </CompFontNeon>
          </div>
        </div>
        <div className="button1">
          <CompButtonLight onClick={handleCheckboxChange}>
            <CompFontNeon neonColor="white" neonSize="s" fontFamily="Audiowide" fontSize="40px">
              PRESS
            </CompFontNeon>
          </CompButtonLight>
        </div>
        <div className={`config ${isChecked ? 'show' : 'hide'}`}>Check Boxes</div>
        <div className="button2">
          <Link to="/Interview">button2</Link>
        </div>
      </div>
    </div>
  );
}

export default Start;
