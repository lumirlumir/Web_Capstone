import React from 'react';

import CompDivNeon from '@/components/CompDivNeon';
import { scenarioPropTypes, scenarioPhasePropTypes } from '@/utils/propTypes';

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
  scenario: scenarioPropTypes.isRequired,
  scenarioPhase: scenarioPhasePropTypes.isRequired,
};
SectionClient.defaultProps = {};

export default SectionClient;
