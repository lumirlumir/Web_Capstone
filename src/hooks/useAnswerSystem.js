import { useState, useEffect } from 'react';

import { generateAnswerSystem } from '@/services/openaiService';

/**
 *
 * @param {string[]} arrayQuestion
 * @returns {[
 *   array: string[],
 *   generate: function,
 * ]}
 */
const useAnswer = arrayQuestion => {
  /* Hooks */
  // useState
  const [array, setArray] = useState([]);
  const [triggerState, setTriggerState] = useState(false);
  // useEffect
  useEffect(() => {
    if (!triggerState) return;

    if (array.length < arrayQuestion.length) {
      generateAnswerSystem(arrayQuestion[array.length]).then(result => {
        setArray(prevState => [...prevState, result]);
      });
    }
  }, [arrayQuestion, array, triggerState]);

  /* Func */
  const generate = () => {
    setTriggerState(true);
  };

  /* Return */
  return [array, generate];
};

export default useAnswer;
