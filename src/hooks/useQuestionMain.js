import { useState, useRef, useEffect } from 'react';

import { generateQuestionMain } from '@/services/openaiService';

/**
 *
 * @param {string} questionType select among 'cs', 'fe', 'be', 'db', 'oop'
 * @param {number} questionMainCount
 * @returns {[
 *   array: string[],
 *   generate: function,
 * ]}
 */
const useQuestionMain = (questionType, questionMainCount) => {
  /* Hooks */
  // useState
  const [array, setArray] = useState([]);
  const [triggerState, setTriggerState] = useState(false);
  // useRef
  const questionTypeRef = useRef(questionType.toLowerCase());
  // useEffect
  useEffect(() => {
    // useEffect excutes twice at the first mount and questionMainState's mount. Below code prevents both.
    if (!triggerState) return;

    if (array.length < questionMainCount) {
      generateQuestionMain(questionTypeRef.current, array).then(result => {
        setArray(prevState => [...prevState, result]);
      });
    }
  }, [questionMainCount, array, triggerState]);

  /* Func */
  const generate = () => {
    setTriggerState(true);
  };

  /* Return */
  return [array, generate];
};

export default useQuestionMain;
