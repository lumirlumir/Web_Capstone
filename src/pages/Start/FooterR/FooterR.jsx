import React from 'react';
import { IoExitOutline } from 'react-icons/io5';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

import CompButtonLight from '@/components/CompButtonLight';
import CompFontNeon from '@/components/CompFontNeon';

import './FooterR.scss';

/**
 *
 * @returns FooterR
 */
function FooterR() {
  const doNothing = () => {};
  const condition = true;

  return (
    <footer className="FooterR">
      <CompButtonLight style={{ width: '60px', height: '60px' }} onClick={doNothing}>
        <CompFontNeon neonColor="white">{condition ? <IoExitOutline size="37px" /> : <IoIosCheckmarkCircleOutline size="39px" />}</CompFontNeon>
      </CompButtonLight>
    </footer>
  );
}

export default FooterR;
