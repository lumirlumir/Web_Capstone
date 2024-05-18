import React from 'react';
import PropTypes from 'prop-types';
import { IoExitOutline } from 'react-icons/io5';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

import CompButtonLight from '@/components/CompButtonLight';
import CompFontNeon from '@/components/CompFontNeon';

import './FooterR.scss';

/**
 *
 * @returns FooterR
 */
function FooterR({ scenario, scenarioPhase }) {
  /* Props */
  const { scenarioPhaseState, isScenarioPhaseEnd } = scenarioPhase;
  const { visibility, isSubmit } = scenario.phase[scenarioPhaseState].FooterR;

  /* Function */
  const doNothing = () => {};

  /* Return */
  return (
    <footer className={`FooterR ${visibility ? '' : 'off'} ${isScenarioPhaseEnd() ? '' : 'clickDisabled'}`}>
      <CompButtonLight style={{ width: '60px', height: '60px' }} onClick={doNothing}>
        <CompFontNeon neonColor="white">{isSubmit ? <IoIosCheckmarkCircleOutline size="39px" /> : <IoExitOutline size="37px" />}</CompFontNeon>
      </CompButtonLight>
    </footer>
  );
}
FooterR.propTypes = {
  scenario: PropTypes.object.isRequired,
  scenarioPhase: PropTypes.shape({
    scenarioPhaseState: PropTypes.number,
    isScenarioPhaseEnd: PropTypes.func,
  }).isRequired,
};
FooterR.defaultProps = {};

export default FooterR;
