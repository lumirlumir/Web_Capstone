import React, { useState } from 'react';
import { IoHomeOutline, IoExitOutline } from 'react-icons/io5';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

import CompButtonLight from '@/components/CompButtonLight';
import CompDivNeon from '@/components/CompDivNeon';
import CompFontNeon from '@/components/CompFontNeon';

import './Footer.scss';

/**
 *
 * @returns Footer
 */
function Footer() {
  const [buttonState, setButtonState] = useState(false); // onPress, onStart, off
  const handleButtonState = () => {
    setButtonState(!buttonState);
  };

  return (
    <CompDivNeon className="Footer" neonColor="silver" neonSize="xs" borderWidth="2px">
      <CompButtonLight onClick="" neonSize="3px" padding="15px" letterSpacing="">
        <IoHomeOutline className="home" size="40px" color="#c4c4c6" />
      </CompButtonLight>
      <div>
        <CompFontNeon neonColor="red" neonSize="xs" fontFamily="audiowide" fontSize="30px">
          59:59:59
        </CompFontNeon>
      </div>
      <div>
        <CompButtonLight onClick={handleButtonState} neonSize="3px" padding="15px" letterSpacing="">
          {buttonState ? <IoExitOutline className="check" size="40px" color="#c4c4c6" /> : <IoIosCheckmarkCircleOutline className="check" size="40px" color="#c4c4c6" />}
        </CompButtonLight>
      </div>
    </CompDivNeon>
  );
}

export default Footer;
