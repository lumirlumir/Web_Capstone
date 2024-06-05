import { useCallback, useEffect, useRef, useState } from 'react';

import useInterviewObj from '@/hooks/interview/useInterviewObj';
import useHistoryRef from '@/hooks/utils/useHistoryRef';
import { generateQuestionMain, generateAnswerSystem, generateFeedbackGrade, generateQuestionSub } from '@/services/openaiService';

const useInterview = () => {
  /* Hooks */
  // useInterviewObj
  const { interviewObjState, initInterviewObj, addInterviewObj, isInterviewObjEmpty, isInterviewObjFull, isOnlyFeedbackEmpty, getQuestion } = useInterviewObj();
  // useInterviewHistory
  const questionTypeRef = useRef(null);
  const rowRef = useRef(null);
  const colRef = useRef(null);

  const { historyRef, addHistory } = useHistoryRef();

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
  // useContent
  const contentRef = useRef(null);
  const [contentState, setContentState] = useState('');
  const set = text => {
    setContentState(text);
  };
  // useTrigger
  const [triggerState, setTriggerState] = useState(false);
  const trigger = () => {
    setTriggerState(true);
  };

  /* Func Private */
  // generateChain
  const generateChainFirst = useCallback(
    questionType => {
      const generateQuestion = isQuestionMain() ? generateQuestionMain(questionType, getQuestionMainHistory()) : generateQuestionSub(historyRef.current.at(-1).question, historyRef.current.at(-1).answerUser);

      generateQuestion
        .then(result => {
          addInterviewObj({ question: result });

          return result;
        })
        .then(PrevResult => {
          generateAnswerSystem(PrevResult).then(result => {
            addInterviewObj({ answerSystem: result });
          });
        });
    },
    [isQuestionMain, getQuestionMainHistory, historyRef, addInterviewObj],
  );
  const generateChainSecond = useCallback(() => {
    generateFeedbackGrade(interviewObjState.answerSystem, interviewObjState.answerUser).then(result => {
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
      // console.log('generateChainFirst()');
      generateChainFirst('cs');
    }
    if (isOnlyFeedbackEmpty()) {
      // console.log('generateChainSecond()');
      setContentState('');
      generateChainSecond();
    }
    if (isInterviewObjFull()) {
      // console.log('addHistory()');
      addHistory(interviewObjState);
      // console.log('initInterviewObj()');
      initInterviewObj();
    }
  }, [interviewObjState, generateChainFirst, generateChainSecond, isInterviewObjEmpty, isOnlyFeedbackEmpty, isInterviewObjFull, addHistory, isInterviewDone, triggerState, initInterviewObj]);

  /* Func Public */
  const init = configState => {
    const { questionType, questionMain, questionSub } = configState;
    questionTypeRef.current = questionType;
    rowRef.current = questionMain;
    colRef.current = questionSub + 1;

    trigger();
  };
  const submit = () => {
    addInterviewObj({ answerUser: contentState });
  };

  /* Return */
  return {
    contentRef,
    init,
    submit,
    set,
    isInterviewDone,
    getQuestionMain: getQuestion,
  };
};

export default useInterview;
