import { useCallback, useEffect } from 'react';

import useInterviewContent from '@/hooks/interview/useInterviewContent';
import useInterviewHistory from '@/hooks/interview/useInterviewHistory';
import useInterviewObj from '@/hooks/interview/useInterviewObj';
import useTrigger from '@/hooks/utils/useTrigger';

import { fetchQuestionMain, fetchQuestionSub, fetchAnswer, fetchFeedback } from '@/services/openaiService';

const useInterview = () => {
  /* Hooks */
  // useInterviewHistory
  const { interviewHistoryRef, initInterviewHistory, addInterviewHistory, isQuestionMain, isInterviewDone, getQuestionMainHistory } = useInterviewHistory();
  // useInterviewObj
  const { interviewObjState, initInterviewObj, addInterviewObj, isInterviewObjEmpty, isInterviewObjFull, isOnlyFeedbackEmpty, getQuestion } = useInterviewObj();
  // useContent
  const { contentRef, getTextContent, setHTMLContent, listening, toggleListening } = useInterviewContent();
  // useTrigger
  const { triggerState, trigger } = useTrigger();

  /* Func Private */
  // generateChain
  const fetchChainFirst = useCallback(
    questionType => {
      const generateQuestion = isQuestionMain() ? fetchQuestionMain(questionType, getQuestionMainHistory()) : fetchQuestionSub(interviewHistoryRef.current.at(-1).question, interviewHistoryRef.current.at(-1).answerUser);

      generateQuestion
        .then(result => {
          addInterviewObj({ question: result });

          return result;
        })
        .then(PrevResult => {
          fetchAnswer(PrevResult).then(result => {
            addInterviewObj({ answerSystem: result });
          });
        });
    },
    [interviewHistoryRef, isQuestionMain, getQuestionMainHistory, addInterviewObj],
  );
  const fetchChainSecond = useCallback(() => {
    fetchFeedback(interviewObjState.answerSystem, interviewObjState.answerUser).then(result => {
      addInterviewObj({ feedback: JSON.parse(result) });
    });
  }, [interviewObjState, addInterviewObj]);

  /* Hooks - useEffect */
  useEffect(() => {
    /* Return */
    if (!triggerState) return; // before init.
    if (isInterviewDone()) return; // interview done.

    /* Test */
    // console.log('hello useEffect');

    /* ... */
    if (isInterviewObjEmpty()) {
      // console.log('fetchChainFirst()');
      fetchChainFirst('cs');
    }
    if (isOnlyFeedbackEmpty()) {
      // console.log('fetchChainSecond()');
      fetchChainSecond();
    }
    if (isInterviewObjFull()) {
      // console.log('addInterviewHistory()');
      addInterviewHistory(interviewObjState);
      // console.log('initInterviewObj()');
      initInterviewObj();
    }
  }, [addInterviewHistory, isInterviewDone, interviewObjState, initInterviewObj, isInterviewObjEmpty, isInterviewObjFull, isOnlyFeedbackEmpty, fetchChainFirst, fetchChainSecond, triggerState]);

  /* Func Public */
  const initInterview = useCallback(
    configState => {
      initInterviewHistory(configState);
      trigger();
    },
    [initInterviewHistory, trigger],
  );
  const submit = useCallback(() => {
    addInterviewObj({ answerUser: getTextContent() });
    setHTMLContent('');
  }, [addInterviewObj, getTextContent, setHTMLContent]);

  /* Return */
  return {
    // useInterviewContent
    listening,
    toggleListening,
    // useInterviewHistory
    isInterviewDone,
    // useInterviewObject
    getQuestion,
    // useContent
    contentRef,
    // useInterview
    initInterview,
    submit,
  };
};

export default useInterview;
