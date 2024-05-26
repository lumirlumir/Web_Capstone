import React from 'react';
import { CiMicrophoneOn } from 'react-icons/ci';

import CompButtonLight from '@/components/CompButtonLight';
import CompFontNeon from '@/components/CompFontNeon';
import { scenarioPropTypes, scenarioPhasePropTypes } from '@/utils/propTypes';

import './HeaderR.scss';

/**
 *
 * @returns HeaderR
 */
function HeaderR({ scenario, scenarioPhase }) {
  /* Props */
  const { scenarioPhaseState, isScenarioPhaseDone, isTutorialPhase, isInterviewPhase } = scenarioPhase;
  const { visibility } = scenario.phase[scenarioPhaseState.major][scenarioPhaseState.minor].HeaderR;

  /* Function */
  const doNothing = () => {};

  /* Return */
  return (
    <header className={`HeaderR ${visibility ? '' : 'invisible'} ${(isTutorialPhase() && isScenarioPhaseDone()) || isInterviewPhase() ? '' : 'unclickable'}`}>
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
  scenarioPhase: scenarioPhasePropTypes.isRequired,
};
HeaderR.defaultProps = {};

export default HeaderR;
