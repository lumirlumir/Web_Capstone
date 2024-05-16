import React from 'react';
import PropTypes from 'prop-types';

import CompFontNeon from '@/components/CompFontNeon';

import './Heading.scss';

/**
 *
 * @returns Heading
 */
function Heading({ scenario, scenarioPhase }) {
  /* Props */
  const { scenarioPhaseState } = scenarioPhase;
  const { visibility } = scenario.phase[scenarioPhaseState].Main.Heading;

  /* Return */
  return (
    <div className={`Heading ${visibility ? '' : 'off'}`}>
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
  scenario: PropTypes.object.isRequired,
  scenarioPhase: PropTypes.shape({
    scenarioPhaseState: PropTypes.number,
    handleScenarioPhaseState: PropTypes.func,
  }).isRequired,
};
Heading.defaultProps = {};

export default Heading;
