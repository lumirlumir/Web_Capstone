import React from 'react';
import PropTypes from 'prop-types';
import { GrPowerReset } from 'react-icons/gr';

import CompButtonLight from '@/components/CompButtonLight';
import CompFontNeon from '@/components/CompFontNeon';

import './FooterL.scss';

/**
 *
 * @returns FooterL
 */
function FooterL({ scenario, scenarioPhase }) {
  /* Props */
  const { scenarioPhaseState, isScenarioPhaseEnd } = scenarioPhase;
  const { visibility } = scenario.phase[scenarioPhaseState].FooterL;

  /* Function */
  const reload = () => {
    window.location.reload();
  };

  /* Return */
  return (
    <footer className={`FooterL ${visibility ? '' : 'off'} ${isScenarioPhaseEnd() ? '' : 'clickDisabled'}`}>
      <CompButtonLight style={{ width: '60px', height: '60px' }} onClick={reload}>
        <CompFontNeon neonColor="white">
          <GrPowerReset size="32px" />
        </CompFontNeon>
      </CompButtonLight>
    </footer>
  );
}
FooterL.propTypes = {
  scenario: PropTypes.object.isRequired,
  scenarioPhase: PropTypes.shape({
    scenarioPhaseState: PropTypes.number,
    isScenarioPhaseEnd: PropTypes.func,
  }).isRequired,
};
FooterL.defaultProps = {};

export default FooterL;
