import React from 'react';

import { IoHomeOutline, IoExitOutline } from 'react-icons/io5';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

import './Footer.scss';

/**
 *
 * @returns Footer
 */
function Footer() {
  return (
    <footer className="Footer">
      <div>
        <IoHomeOutline size="40px" />
      </div>

      <div className="time">Remaining Time</div>
      <div>
        <IoIosCheckmarkCircleOutline size="40px" />

        <IoExitOutline size="40px" />
      </div>
    </footer>
  );
}

export default Footer;
