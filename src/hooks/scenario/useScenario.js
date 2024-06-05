import { useCallback, useState } from 'react';

import scenario from '@/data/scenario.json';

/* Constants */
const { TUTORIAL, INTERVIEW, RESULT } = Object.freeze({
  TUTORIAL: 0,
  INTERVIEW: 1,
  RESULT: 2,
});
const { chapter: CHAPTER } = Object.freeze(scenario);

/**
 * scenario > chapter > section > subsection => scenario[chapter][section][subsection]
 *
 * @returns
 */
const useScenario = () => {
  /* Hooks */
  // useState
  const [state, setState] = useState({
    section: 0,
    subsection: 0,
  });

  /* Func */
  // section
  const isSection = useCallback(
    sectionType => {
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
    },
    [state],
  );
  // subsection
  const getSubsectionObj = useCallback(() => CHAPTER[state.section][state.subsection], [state]);
  const toNextSubsection = useCallback(() => {
    setState(prevState => {
      const newSectionState = state.section + 1;
      const newSubsectionState = state.subsection + 1;

      if (newSubsectionState < CHAPTER[state.section].length) {
        return {
          ...prevState,
          subsection: newSubsectionState,
        };
      }
      if (newSectionState < CHAPTER.length) {
        return {
          ...prevState,
          section: newSectionState,
          subsection: 0,
        };
      }
      return prevState;
    });
  }, [state]);
  const toLastSubsection = useCallback(() => {
    setState(prevState => {
      const newSubsectionState = CHAPTER[state.section].length - 1;

      return {
        ...prevState,
        subsection: newSubsectionState,
      };
    });
  }, [state]);

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
