import React from 'react';
import { Link } from 'react-router-dom';

import './Start.scss';

/**
 *
 * @returns Start
 */
function Start() {
  return (
    <div className="Start">
      <div>
        <div className="heading">Heading</div>
        <div className="config">Check Boxes</div>
        <div className="button">
          <Link to="/Interview">Start Button</Link>
        </div>
      </div>
    </div>
  );
}

export default Start;
