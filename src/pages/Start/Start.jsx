import React from 'react';
import { Link } from 'react-router-dom';

import CompFontNeon from '../../components/font/CompFontNeon';

import './Start.scss';

/**
 *
 * @returns Start
 */
function Start() {
  return (
    <div className="Start">
      <div>
        <div className="heading">
          <div className="mock">
            <CompFontNeon color="blue" fontFamily="Pacifico" fontSize="50px">
              Mock
            </CompFontNeon>
          </div>
          <div className="interview">
            <CompFontNeon color="violet" fontFamily="Audiowide" fontSize="100px">
              Interview
            </CompFontNeon>
          </div>
        </div>
        <div className="config">Check Boxes</div>
        <div className="button">
          <Link to="/Interview">Start Button</Link>
        </div>
      </div>
    </div>
  );
}

export default Start;
