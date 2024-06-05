import { useCallback, useEffect } from 'react';

import useInterviewHistory from '@/hooks/interview/useInterviewHistory';
import useInterviewObj from '@/hooks/interview/useInterviewObj';
import useContent from '@/hooks/utils/useContent';
import useTrigger from '@/hooks/utils/useTrigger';

import { fetchQuestionMain, fetchQuestionSub, fetchAnswer, fetchFeedback } from '@/services/openaiService';

const useInterview = () => {
  /* Hooks */
  // useInterviewHistory
  const { interviewHistoryRef, initInterviewHistory, addInterviewHistory, isQuestionMain, isInterviewDone, getQuestionMainHistory } = useInterviewHistory();
  // useInterviewObj
  const { interviewObjState, initInterviewObj, addInterviewObj, isInterviewObjEmpty, isInterviewObjFull, isOnlyFeedbackEmpty, getQuestion } = useInterviewObj();
  // useContent
  const { contentRef, contentState, clearContent, setContent } = useContent();
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
    addInterviewObj({ answerUser: contentState });
    clearContent();
  }, [addInterviewObj, contentState, clearContent]);

  /* Return */
  return {
    // useInterviewHistory
    isInterviewDone,
    // useInterviewObject
    getQuestion,
    // useContent
    contentRef,
    setContent,
    // useInterview
    initInterview,
    submit,
  };
};

export default useInterview;
