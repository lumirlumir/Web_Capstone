import React from 'react';

import CompFontNeon from '@/components/CompFontNeon';
import { scenarioPropTypes, scenarioPhasePropTypes } from '@/utils/propTypes';

import './Heading.scss';

/**
 *
 * @returns Heading
 */
function Heading({ scenario, scenarioPhase }) {
  /* Props */
  const { scenarioPhaseState } = scenarioPhase;
  const { visibility } = scenario.phase[scenarioPhaseState.major][scenarioPhaseState.minor].Main.Heading;

  /* Return */
  return (
    <div className={`Heading ${visibility ? '' : 'invisible'}`}>
      <div className="mock">
        <CompFontNeon neonColor="blue" neonSize="m" fontFamily="Pacifico" fontSize="50px">
          <h1>Mock</h1>
        </CompFontNeon>
      </div>
      <div className="interview">
        <CompFontNeon neonColor="purple" fontFamily="Audiowide" fontSize="100px">
          <h1>Interview</h1>
        </CompFontNeon>
      </div>
    </div>
  );
}
Heading.propTypes = {
  scenario: scenarioPropTypes.isRequired,
  scenarioPhase: scenarioPhasePropTypes.isRequired,
};
Heading.defaultProps = {};

export default Heading;
