import React from 'react';

import './Header.scss';

/**
 *
 * @returns Header
 */
function Header() {
  return (
    <header className="Header">
      <div className="heading">Heading</div>
      <div className="time">Remaining Time</div>
      <div className="button">Config Button</div>
    </header>
  );
}

export default Header;
