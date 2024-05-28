import React, { useRef, useEffect } from 'react';

import { scenarioPropTypes, configPropTypes } from '@/utils/propTypes';

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
function Main({ scenario, config }) {
  /* Hooks */
  // useRef
  const scrollRef = useRef();
  // useEffect
  useEffect(() => {
    const timeout = setTimeout(() => {
      scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }, 2000);
    return () => clearTimeout(timeout);
  }, [scenario.scenarioPhaseState.minor]);

  /* Return */
  return (
    <main className="Main">
      <div>
        <Heading scenario={scenario} />
        <SectionServer scenario={scenario} config={config} />
        <SectionClient scenario={scenario} />
        <SectionConfig config={config} />
        <SectionResult />
        <ButtonMain scenario={scenario} config={config} />
        <div ref={scrollRef} />
      </div>
    </main>
  );
}
Main.propTypes = {
  scenario: scenarioPropTypes.isRequired,
  config: configPropTypes.isRequired,
};
Main.defaultProps = {};

export default Main;
