import { useState } from 'react';

import scenario from '@/data/scenario.json';

/**
 * chapter > section > subsection => chapter[section][subsection]
 *
 * @returns
 */
const useScenario = () => {
  /* Variables */
  const { chapter } = scenario;

  /* Constants */
  const { TUTORIAL, INTERVIEW, RESULT } = Object.freeze({
    TUTORIAL: 0,
    INTERVIEW: 1,
    RESULT: 2,
  });

  /* Hooks */
  // useState
  const [scenarioPhaseState, setScenarioPhaseState] = useState({
    major: 0,
    minor: 0,
  });

  /* Func */
  // delete
  const handleNextScenarioPhaseState = type => {
    const newScenarioPhaseState = scenarioPhaseState[type] + 1;

    if (type === 'major' && newScenarioPhaseState < chapter.length) {
      setScenarioPhaseState(prevState => ({ ...prevState, major: newScenarioPhaseState, minor: 0 }));
    } else if (type === 'minor' && newScenarioPhaseState < chapter[scenarioPhaseState.major].length) {
      setScenarioPhaseState(prevState => ({ ...prevState, [type]: newScenarioPhaseState }));
    }
  };

  // section
  const isSection = sectionType => {
    switch (sectionType.toUpperCase()) {
      case 'TUTORIAL':
        return scenarioPhaseState.major === TUTORIAL;
      case 'INTERVIEW':
        return scenarioPhaseState.major === INTERVIEW;
      case 'RESULT':
        return scenarioPhaseState.major === RESULT;
      default:
        return null;
    }
  };
  // subsection
  const getSubsectionObject = () => {
    return chapter[scenarioPhaseState.major][scenarioPhaseState.minor];
  };
  const toLastSubsection = () => {
    const newScenarioPhaseState = chapter[scenarioPhaseState.major].length - 1;

    setScenarioPhaseState(prevState => ({ ...prevState, minor: newScenarioPhaseState }));
  };
  const isSubsectionLast = () => {
    return scenarioPhaseState.minor === chapter[scenarioPhaseState.major].length - 1;
  };

  /* Return */
  return {
    scenarioPhaseState, // delete
    handleNextScenarioPhaseState, // delete
    // getSectionState
    // toNextSection
    isSection,
    // getSubsectionState
    getSubsectionObject,
    // toNextSubsection
    toLastSubsection,
    isSubsectionLast,
  };
};

export default useScenario;

// TODO: use enum type to major phase.
