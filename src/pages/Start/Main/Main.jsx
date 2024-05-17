import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import ButtonMain from './ButtonMain';
import Heading from './Heading';
import SectionConfig from './SectionConfig';
import SectionResult from './SectionResult';
import SectionServer from './SectionServer';
import SectionClient from './SectionClient';

import './Main.scss';

/**
 *
 * @returns Main
 */
function Main({ scenario, scenarioPhase }) {
  /* useRef */
  const scrollRef = useRef();

  /* useEffect */
  useEffect(() => {
    const timeout = setTimeout(() => {
      scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }, 2000);
    return () => clearTimeout(timeout);
  }, [scenarioPhase.scenarioPhaseState]);

  /* Return */
  return (
    <main className="Main">
      <div>
        <Heading scenario={scenario} scenarioPhase={scenarioPhase} />
        <SectionConfig />
        <SectionResult />
        <SectionServer scenario={scenario} scenarioPhase={scenarioPhase} />
        <SectionClient scenario={scenario} scenarioPhase={scenarioPhase} />
        <ButtonMain scenario={scenario} scenarioPhase={scenarioPhase} />
        <div ref={scrollRef} />
      </div>
    </main>
  );
}
Main.propTypes = {
  scenario: PropTypes.object.isRequired,
  scenarioPhase: PropTypes.shape({
    scenarioPhaseState: PropTypes.number,
    handleScenarioPhaseState: PropTypes.func,
    handleSkipScenarioPhaseState: PropTypes.func,
  }).isRequired,
};
Main.defaultProps = {};

export default Main;
