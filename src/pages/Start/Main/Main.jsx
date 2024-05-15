import React from 'react';
import PropTypes from 'prop-types';

import ButtonMain from './ButtonMain';
import Heading from './Heading';
import SectionServer from './SectionServer';

import './Main.scss';

/**
 *
 * @returns Main
 */
function Main({ scenario, scenarioPhase }) {
  /* Return */
  return (
    <main className="Main">
      <div>
        <Heading />
        <SectionServer scenario={scenario} scenarioPhase={scenarioPhase} />
        <ButtonMain scenario={scenario} scenarioPhase={scenarioPhase} />
      </div>
    </main>
  );
}
Main.propTypes = {
  scenario: PropTypes.object.isRequired,
  scenarioPhase: PropTypes.shape({
    scenarioPhaseState: PropTypes.number,
    handleScenarioPhaseState: PropTypes.func,
  }).isRequired,
};
Main.defaultProps = {};

export default Main;

/*
<CompDivNeon className={`config ${buttonState}`} neonColor="banana">
  <div>
    <input type="checkbox" onChange={() => {}} />
    Configuration Check Boxes
  </div>
</CompDivNeon>
*/
