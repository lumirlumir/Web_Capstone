import React from 'react';

import CompFontNeon from '@/components/CompFontNeon';
import { scenarioPropTypes, scenarioPhasePropTypes } from '@/utils/propTypes';

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
    <footer className={`FooterM ${visibility ? '' : 'invisible'}`}>
      <CompFontNeon neonSize="s" fontFamily="audiowide" fontSize="35px">
        59:59:59
      </CompFontNeon>
    </footer>
  );
}
FooterM.propTypes = {
  scenario: scenarioPropTypes.isRequired,
  scenarioPhase: scenarioPhasePropTypes.isRequired,
};
FooterM.defaultProps = {};

export default FooterM;
