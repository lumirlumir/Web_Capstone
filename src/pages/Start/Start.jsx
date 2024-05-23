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
  const handleNextScenarioPhaseState = () => {
    const newScenarioPhaseState = scenarioPhaseState + 1;
    if (newScenarioPhaseState < scenario.phase.length) {
      setScenarioPhaseState(newScenarioPhaseState);
    }
  };
  const handleSkipScenarioPhaseState = () => {
    const newScenarioPhaseState = scenario.phase.length - 1;
    setScenarioPhaseState(newScenarioPhaseState);
  };
  const isScenarioPhaseDone = () => {
    return scenarioPhaseState === scenario.phase.length - 1;
  };
  const scenarioPhase = {
    scenarioPhaseState,
    handleNextScenarioPhaseState,
    handleSkipScenarioPhaseState,
    isScenarioPhaseDone,
  };
  // config
  const [configState, setConfigState] = useState({
    visibility: false,
    questionType: {
      cs: false,
      fe: false,
      be: false,
      db: false,
      oop: false,
    },
    questionMain: 0,
    questionSub: 0,
    timeLimit: 0,
  });
  const handleConfigState = obj => {
    setConfigState(prevState => ({
      ...prevState,
      ...obj,
      questionType: {
        ...prevState.questionType,
        ...obj.questionType,
      },
    }));
  };
  const config = {
    configState,
    handleConfigState,
  };

  /* Return */
  return (
    <div className="Start">
      <HeaderL scenario={scenario} scenarioPhase={scenarioPhase} config={config} />
      <HeaderR scenario={scenario} scenarioPhase={scenarioPhase} />
      <Main scenario={scenario} scenarioPhase={scenarioPhase} config={config} />
      <FooterL scenario={scenario} scenarioPhase={scenarioPhase} />
      <FooterM scenario={scenario} scenarioPhase={scenarioPhase} />
      <FooterR scenario={scenario} scenarioPhase={scenarioPhase} />
    </div>
  );
}

export default Start;
