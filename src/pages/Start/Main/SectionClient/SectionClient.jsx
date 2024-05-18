import React from 'react';
import PropTypes from 'prop-types';

import CompDivNeon from '@/components/CompDivNeon';

import './SectionClient.scss';

/**
 *
 * @returns SectionClient
 */
function SectionClient({ scenario, scenarioPhase }) {
  /* Props */
  const { scenarioPhaseState } = scenarioPhase;
  const { visibility } = scenario.phase[scenarioPhaseState].Main.SectionClient;

  /* Return */
  return <CompDivNeon className={`SectionClient ${visibility ? '' : 'off'}`} neonColor="black" />;
}
SectionClient.propTypes = {
  scenario: PropTypes.object.isRequired,
  scenarioPhase: PropTypes.shape({
    scenarioPhaseState: PropTypes.number,
    handleScenarioPhaseState: PropTypes.func,
  }).isRequired,
};
SectionClient.defaultProps = {};

export default SectionClient;
