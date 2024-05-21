import React from 'react';
import PropTypes from 'prop-types';
import { GoGear } from 'react-icons/go';

import CompButtonLight from '@/components/CompButtonLight';
import CompFontNeon from '@/components/CompFontNeon';

import './HeaderL.scss';

/**
 *
 * @returns HeaderL
 */
function HeaderL({ scenario, scenarioPhase, config }) {
  /* Props */
  const { handleVisibilityConfigState } = config;
  const { scenarioPhaseState, isScenarioPhaseEnd } = scenarioPhase;
  const { visibility } = scenario.phase[scenarioPhaseState].HeaderL;

  /* Return */
  return (
    <header className={`HeaderL ${visibility ? '' : 'off'} ${isScenarioPhaseEnd() ? '' : 'clickDisabled'}`}>
      <CompButtonLight style={{ width: '60px', height: '60px' }} onClick={handleVisibilityConfigState}>
        <CompFontNeon neonColor="white">
          <GoGear size="35px" />
        </CompFontNeon>
      </CompButtonLight>
    </header>
  );
}
HeaderL.propTypes = {
  scenario: PropTypes.object.isRequired,
  scenarioPhase: PropTypes.shape({
    scenarioPhaseState: PropTypes.number,
    isScenarioPhaseEnd: PropTypes.func,
  }).isRequired,
  config: PropTypes.shape({
    handleVisibilityConfigState: PropTypes.func,
  }).isRequired,
};
HeaderL.defaultProps = {};

export default HeaderL;
