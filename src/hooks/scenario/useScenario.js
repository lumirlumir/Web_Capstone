import { useState } from 'react';

import scenario from '@/data/scenario.json';

/**
 * scenario > chapter > section > subsection => scenario.chapter[section][subsection]
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
  const [state, setState] = useState({
    section: 0,
    subsection: 0,
  });

  /* Func Public */
  // section
  const isSection = sectionType => {
    switch (sectionType.toUpperCase()) {
      case 'TUTORIAL':
        return state.section === TUTORIAL;
      case 'INTERVIEW':
        return state.section === INTERVIEW;
      case 'RESULT':
        return state.section === RESULT;
      default:
        return null;
    }
  };
  // subsection
  const getSubsectionObj = () => chapter[state.section][state.subsection];
  const toNextSubsection = () => {
    const newSubsectionState = state.subsection + 1;

    if (newSubsectionState < chapter[state.section].length) {
      setState(prevState => ({ ...prevState, subsection: newSubsectionState }));
    } else {
      const newSectionState = state.section + 1;

      if (newSectionState < chapter.length) {
        setState(prevState => ({ ...prevState, section: newSectionState, subsection: 0 }));
      }
    }
  };
  const toLastSubsection = () => {
    const newSubsectionState = chapter[state.section].length - 1;

    setState(prevState => ({ ...prevState, subsection: newSubsectionState }));
  };

  /* Return */
  return {
    // section
    isSection,
    // subsection
    subsectionState: state.subsection,
    getSubsectionObj,
    toNextSubsection,
    toLastSubsection,
  };
};

export default useScenario;
