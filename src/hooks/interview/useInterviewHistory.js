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
  const questionTypeRef = useRef(null);
  const rowRef = useRef(null);
  const colRef = useRef(null);

  /* Func */
  const initInterviewHistory = useCallback(configState => {
    const { questionType, questionMain, questionSub } = configState;

    questionTypeRef.current = questionType;
    rowRef.current = questionMain;
    colRef.current = questionSub + 1;
  }, []);
  const isQuestionMain = useCallback(() => {
    return historyRef.current.length % colRef.current === 0;
  }, [historyRef]);
  const isInterviewDone = useCallback(() => {
    return historyRef.current.length === rowRef.current * colRef.current;
  }, [historyRef]);
  const getQuestionMainHistory = useCallback(() => {
    const questionMainHistory = [];

    for (let i = 0; i < historyRef.current.length; i += colRef.current) {
      questionMainHistory.push(historyRef.current[i].question);
    }

    return questionMainHistory;
  }, [historyRef]);

  /* Return */
  return {
    interviewHistoryRef: historyRef,
    initInterviewHistory,
    addInterviewHistory: addHistory,
    isQuestionMain,
    isInterviewDone,
    getQuestionMainHistory,
  };
};

export default useInterviewHistory;
