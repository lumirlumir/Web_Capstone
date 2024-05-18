import React from 'react';
import PropTypes from 'prop-types';

import CompFontNeon from '@/components/CompFontNeon';

import './FooterM.scss';

/**
 *
 * @returns FooterM
 */
function FooterM({ scenario, scenarioPhase }) {
  /* Props */
  const { scenarioPhaseState } = scenarioPhase;
  const { visibility } = scenario.phase[scenarioPhaseState].FooterM;

  /* Return */
  return (
    <footer className={`FooterM ${visibility ? '' : 'off'}`}>
      <CompFontNeon neonSize="s" fontFamily="audiowide" fontSize="35px">
        59:59:59
      </CompFontNeon>
    </footer>
  );
}
FooterM.propTypes = {
  scenario: PropTypes.object.isRequired,
  scenarioPhase: PropTypes.shape({
    scenarioPhaseState: PropTypes.number,
    handleScenarioPhaseState: PropTypes.func,
  }).isRequired,
};
FooterM.defaultProps = {};

export default FooterM;
