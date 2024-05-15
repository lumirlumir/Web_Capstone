import React, { useState } from 'react';

import scenario from '@/data/scenario.json';

import HeaderR from './HeaderR';
import HeaderL from './HeaderL';
import Main from './Main';

import './Start.scss';

/**
 *
 * @returns Start
 */
function Start() {
  /* useState */
  // ScenarioPhase
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
      <HeaderR />
      <HeaderL />
      <Main scenario={scenario} scenarioPhase={scenarioPhase} />
    </div>
  );
}

export default Start;
