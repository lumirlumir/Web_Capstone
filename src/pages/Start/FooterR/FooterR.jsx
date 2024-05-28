import React from 'react';
import { IoExitOutline } from 'react-icons/io5';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

import CompButtonLight from '@/components/CompButtonLight';
import CompFontNeon from '@/components/CompFontNeon';
import { scenarioPropTypes } from '@/utils/propTypes';

import './FooterR.scss';

/**
 *
 * @returns FooterR
 */
function FooterR({ scenario }) {
  /* Props */
  const { chapter, scenarioPhaseState, isScenarioPhaseDone, isTutorialPhase, isInterviewPhase } = scenario;
  const { visibility, isSubmit } = chapter[scenarioPhaseState.major][scenarioPhaseState.minor].FooterR;

  /* Function */
  const doNothing = () => {};

  /* Return */
  return (
    <footer className={`FooterR ${visibility ? '' : 'invisible'} ${(isTutorialPhase() && isScenarioPhaseDone()) || isInterviewPhase() ? '' : 'unclickable'}`}>
      <CompButtonLight style={{ width: '60px', height: '60px' }} onClick={doNothing}>
        <CompFontNeon neonColor="white">{isSubmit ? <IoIosCheckmarkCircleOutline size="39px" /> : <IoExitOutline size="37px" />}</CompFontNeon>
      </CompButtonLight>
    </footer>
  );
}
FooterR.propTypes = {
  scenario: scenarioPropTypes.isRequired,
};
FooterR.defaultProps = {};

export default FooterR;
