import { useState, useRef, useEffect } from 'react';

import generateQuestion from '@/services/generateQuestionMain';
import { createMessageArray } from '@/utils/openai';

/**
 *
 * @param {string} questionType select among 'cs', 'fe', 'be', 'db', 'oop'
 * @param {number} questionMainCount
 * @returns {[
 *   state: array,
 *   generate: function,
 * ]}
 */
const useQuestionMain = (questionType, questionMainCount) => {
  /* Hooks */
  // useState
  const [state, setState] = useState([]);
  const [triggerState, setTriggerState] = useState(false);
  // useRef
  const questionTypeRef = useRef(questionType.toLowerCase());
  // useEffect
  useEffect(() => {
    // useEffect excutes twice at the first mount and questionMainState's mount. Below code prevents both.
    if (!triggerState) return;

    if (state.length < questionMainCount) {
      generateQuestion(questionTypeRef.current, createMessageArray(state)).then(result => {
        setState(prevState => [...prevState, result]);
      });
    }
  }, [questionMainCount, state, triggerState]);

  /* Func */
  const generate = () => {
    setTriggerState(true);
  };

  /* Return */
  return [state, generate];
};

export default useQuestionMain;
