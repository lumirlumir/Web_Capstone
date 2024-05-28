import { useState } from 'react';

import scenario from '@/data/scenario.json';

/**
 * chapter > section > subsection
 *
 * @returns
 */
const useScenario = () => {
  /* Variables */
  const { chapter } = scenario;

  /* Hooks */
  // useState
  const [scenarioPhaseState, setScenarioPhaseState] = useState({
    major: 0,
    minor: 0,
  });

  /* Func */
  const handleNextScenarioPhaseState = type => {
    const newScenarioPhaseState = scenarioPhaseState[type] + 1;

    if (type === 'major' && newScenarioPhaseState < chapter.length) {
      setScenarioPhaseState(prevState => ({ ...prevState, major: newScenarioPhaseState, minor: 0 }));
    } else if (type === 'minor' && newScenarioPhaseState < chapter[scenarioPhaseState.major].length) {
      setScenarioPhaseState(prevState => ({ ...prevState, [type]: newScenarioPhaseState }));
    }
  };
  const handleSkipScenarioPhaseState = () => {
    // for minor phase
    const newScenarioPhaseState = chapter[scenarioPhaseState.major].length - 1;

    setScenarioPhaseState(prevState => ({ ...prevState, minor: newScenarioPhaseState }));
  };
  const isScenarioPhaseDone = () => {
    // for minor phase
    return scenarioPhaseState.minor === chapter[scenarioPhaseState.major].length - 1;
  };
  const isTutorialPhase = () => {
    return scenarioPhaseState.major === 0;
  };
  const isInterviewPhase = () => {
    return scenarioPhaseState.major === 1;
  };

  const getCurrentChapterObject = () => {
    return chapter[scenarioPhaseState.major][scenarioPhaseState.minor];
  };

  /* Return */
  return {
    scenarioPhaseState,
    handleNextScenarioPhaseState,
    handleSkipScenarioPhaseState,
    isScenarioPhaseDone,
    isTutorialPhase,
    isInterviewPhase,
    getCurrentChapterObject,
  };
};

export default useScenario;

// TODO: use enum type to major phase.
