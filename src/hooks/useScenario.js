import { useState } from 'react';

import scenario from '@/data/scenario.json';

const useScenario = () => {
  /* Hooks */
  // useState
  const [scenarioPhaseState, setScenarioPhaseState] = useState({
    major: 0,
    minor: 0,
  });

  /* Func */
  const handleNextScenarioPhaseState = type => {
    const newScenarioPhaseState = scenarioPhaseState[type] + 1;

    if (type === 'major' && newScenarioPhaseState < scenario.phase.length) {
      setScenarioPhaseState(prevState => ({ ...prevState, major: newScenarioPhaseState, minor: 0 }));
    } else if (type === 'minor' && newScenarioPhaseState < scenario.phase[scenarioPhaseState.major].length) {
      setScenarioPhaseState(prevState => ({ ...prevState, [type]: newScenarioPhaseState }));
    }
  };
  const handleSkipScenarioPhaseState = () => {
    // for minor phase
    const newScenarioPhaseState = scenario.phase[scenarioPhaseState.major].length - 1;

    setScenarioPhaseState(prevState => ({ ...prevState, minor: newScenarioPhaseState }));
  };
  const isScenarioPhaseDone = () => {
    // for minor phase
    return scenarioPhaseState.minor === scenario.phase[scenarioPhaseState.major].length - 1;
  };
  const isTutorialPhase = () => {
    return scenarioPhaseState.major === 0;
  };
  const isInterviewPhase = () => {
    return scenarioPhaseState.major === 1;
  };

  // const getCurrentChapter

  /* Return */
  return {
    chapter: scenario.phase,
    scenarioPhaseState,
    handleNextScenarioPhaseState,
    handleSkipScenarioPhaseState,
    isScenarioPhaseDone,
    isTutorialPhase,
    isInterviewPhase,
  };
};

export default useScenario;

// TODO: use enum type to major phase.
