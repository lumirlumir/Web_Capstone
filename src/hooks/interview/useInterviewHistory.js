import { useCallback, useRef } from 'react';

import useHistoryRef from '@/hooks/utils/useHistoryRef';

/**
 *
 * @returns
 */
const useInterviewHistory = () => {
  /* Hooks */
  // useHistoryRef
  const { historyRef, addHistory } = useHistoryRef();
  // useRef
  const questionTypeRef = useRef([]); // array
  const rowRef = useRef(null); // number
  const colRef = useRef(null); // number

  /* Func */
  const initInterviewHistory = useCallback(configState => {
    const { questionType, questionMain, questionSub } = configState;

    questionTypeRef.current = Object.keys(questionType).filter(key => questionType[key]); // Extract only the keys with true values
    rowRef.current = questionMain;
    colRef.current = questionSub + 1;
  }, []);
  const isQuestionMain = useCallback(() => {
    return historyRef.current.length % colRef.current === 0;
  }, [historyRef]);
  const isInterviewDone = useCallback(() => {
    return historyRef.current.length === questionTypeRef.current.length * rowRef.current * colRef.current;
  }, [historyRef]);
  const getQuestionMainHistory = useCallback(() => {
    const questionMainHistory = [];

    for (let i = 0; i < historyRef.current.length; i += colRef.current) {
      questionMainHistory.push(historyRef.current[i].question);
    }

    return questionMainHistory;
  }, [historyRef]);
  const getInterviewInfo = useCallback(() => {
    return {
      questionType: questionTypeRef.current[Math.floor(historyRef.current.length / (rowRef.current * colRef.current))],
      questionMain: (Math.floor(historyRef.current.length / colRef.current) % rowRef.current) + 1,
      questionSub: (historyRef.current.length % colRef.current) + 1,
    };
  }, [historyRef]);

  /* Return */
  return {
    interviewHistoryRef: historyRef,
    initInterviewHistory,
    addInterviewHistory: addHistory,
    isQuestionMain,
    isInterviewDone,
    getQuestionMainHistory,
    getInterviewInfo,
  };
};

export default useInterviewHistory;
