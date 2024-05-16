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
function HeaderL({ scenario, scenarioPhase }) {
  /* Props */
  const { scenarioPhaseState } = scenarioPhase;
  const { visibility } = scenario.phase[scenarioPhaseState].HeaderL;

  /* Function */
  const doNothing = () => {};

  /* Return */
  return (
    <header className={`HeaderL ${visibility ? '' : 'off'}`}>
      <CompButtonLight style={{ width: '60px', height: '60px' }} onClick={doNothing}>
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
    handleScenarioPhaseState: PropTypes.func,
  }).isRequired,
};
HeaderL.defaultProps = {};

export default HeaderL;
