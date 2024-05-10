import React from 'react';

import CompFontNeon from '@/components/CompFontNeon';

import './Heading.scss';

/**
 *
 * @returns Heading
 */
function Heading() {
  return (
    <div className="Heading">
      <div className="mock">
        <CompFontNeon neonColor="blue" neonSize="m" fontFamily="Pacifico" fontSize="50px">
          <h1>Mock</h1>
        </CompFontNeon>
      </div>
      <div className="interview">
        <CompFontNeon neonColor="purple" fontFamily="Audiowide" fontSize="100px">
          <h1>Interview</h1>
        </CompFontNeon>
      </div>
    </div>
  );
}

export default Heading;
