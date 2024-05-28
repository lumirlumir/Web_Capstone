import React from 'react';
import { CiMicrophoneOn } from 'react-icons/ci';

import CompButtonLight from '@/components/CompButtonLight';
import CompFontNeon from '@/components/CompFontNeon';
import { scenarioPropTypes } from '@/utils/propTypes';

import './HeaderR.scss';

/**
 *
 * @returns HeaderR
 */
function HeaderR({ scenario }) {
  /* Props */
  const { getSubsectionObject, isSubsectionLast, isSection } = scenario;
  const { visibility } = getSubsectionObject().HeaderR;

  /* Function */
  const doNothing = () => {};

  /* Return */
  return (
    <header className={`HeaderR ${visibility ? '' : 'invisible'} ${(isSection('tutorial') && isSubsectionLast()) || isSection('interview') ? '' : 'unclickable'}`}>
      <CompButtonLight style={{ width: '60px', height: '60px' }} onClick={doNothing}>
        <CompFontNeon neonColor="white">
          <CiMicrophoneOn size="40px" />
        </CompFontNeon>
      </CompButtonLight>
    </header>
  );
}
HeaderR.propTypes = {
  scenario: scenarioPropTypes.isRequired,
};
HeaderR.defaultProps = {};

export default HeaderR;
