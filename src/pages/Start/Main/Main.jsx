import React, { useRef, useEffect } from 'react';

import { scenarioPropTypes, scenarioPhasePropTypes, configPropTypes } from '@/utils/propTypes';

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
function Main({ scenario, scenarioPhase, config }) {
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
        <SectionServer scenario={scenario} scenarioPhase={scenarioPhase} config={config} />
        <SectionClient scenario={scenario} scenarioPhase={scenarioPhase} />
        <SectionConfig config={config} />
        <SectionResult />
        <ButtonMain scenario={scenario} scenarioPhase={scenarioPhase} config={config} />
        <div ref={scrollRef} />
      </div>
    </main>
  );
}
Main.propTypes = {
  scenario: scenarioPropTypes.isRequired,
  scenarioPhase: scenarioPhasePropTypes.isRequired,
  config: configPropTypes.isRequired,
};
Main.defaultProps = {};

export default Main;
