import React, { useState } from 'react';

import scenario from '@/data/scenario.json';

import FooterL from './FooterL';
import FooterM from './FooterM';
import FooterR from './FooterR';
import HeaderL from './HeaderL';
import HeaderR from './HeaderR';
import Main from './Main';

import './Start.scss';

/**
 *
 * @returns Start
 */
function Start() {
  /* useState */
  // scenarioPhase
  const [scenarioPhaseState, setScenarioPhaseState] = useState(0);
  const handleScenarioPhaseState = () => {
    const newScenarioPhaseState = scenarioPhaseState + 1;
    if (newScenarioPhaseState < scenario.phase.length) {
      setScenarioPhaseState(newScenarioPhaseState);
    }
  };
  const scenarioPhase = {
    scenarioPhaseState,
    handleScenarioPhaseState,
  };

  /* Return */
  return (
    <div className="Start">
      <HeaderL />
      <HeaderR />
      <Main scenario={scenario} scenarioPhase={scenarioPhase} />
      <FooterL />
      <FooterM />
      <FooterR />
    </div>
  );
}

export default Start;
