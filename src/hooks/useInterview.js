import { useState, useRef, useCallback, useEffect } from 'react';

import { generateQuestionMain, generateAnswerSystem, generateFeedbackGrade, generateQuestionSub } from '@/services/openaiService';

const useInterview = () => {
  /* Hooks */
  // useRef
  const questionTypeRef = useRef(null);
  const rowRef = useRef(null);
  const colRef = useRef(null);
  // useState
  const [dataState, setDataState] = useState(null);
  const [indexState, setIndexState] = useState({
    row: 0,
    col: 0,
  });

  /* Func Private */
  // handler
  const handleDataState = useCallback(
    obj => {
      setDataState(prevState => {
        const newData = [...prevState];

        newData[indexState.row] = [...prevState[indexState.row]];

        newData[indexState.row][indexState.col] = {
          ...prevState[indexState.row][indexState.col],
          ...obj,
        };

        return newData;
      });
    },
    [indexState],
  );
  const handleIndexState = () => {
    setIndexState(prevState => {
      if (prevState.col + 1 < colRef.current) {
        return {
          ...prevState,
          col: prevState.col + 1,
        };
      }
      if (prevState.row + 1 < rowRef.current) {
        return {
          ...prevState,
          row: prevState.row + 1,
          col: 0,
        };
      }
      return null;
    });
  };
  // get
  const getQuestionMainHistory = useCallback(() => {
    const questionMainHistory = [];

    for (let i = 0; i <= indexState.row - 1; i += 1) {
      questionMainHistory.push(dataState[i][0].questionMain);
    }

    return questionMainHistory;
  }, [dataState, indexState]);
  // generateChain
  const generateChainFirst = useCallback(
    questionType => {
      const generateQuestion =
        indexState.col === 0 ? generateQuestionMain(questionType, getQuestionMainHistory()) : generateQuestionSub(dataState[indexState.row][indexState.col - 1].questionMain, dataState[indexState.row][indexState.col - 1].answerUser);

      generateQuestion
        .then(result => {
          handleDataState({ questionMain: result });

          return result;
        })
        .then(PrevResult => {
          generateAnswerSystem(PrevResult).then(result => {
            handleDataState({ answerSystem: result });
          });
        });
    },
    [dataState, indexState, handleDataState, getQuestionMainHistory],
  );
  const generateChainSecond = useCallback(() => {
    generateFeedbackGrade(dataState[indexState.row][indexState.col].answerSystem, dataState[indexState.row][indexState.col].answerUser).then(result => {
      handleDataState({ feedbackGrade: JSON.parse(result) });
    });
  }, [dataState, indexState, handleDataState]);

  /* Hooks - useEffect */
  useEffect(() => {
    /* Return */
    if (dataState === null) return; // before init.
    if (indexState === null) return; // interview done.

    /* Test */
    console.log('hello useEffect');

    /* Variables */
    const curData = dataState[indexState.row][indexState.col];

    /* ... */
    if (curData.questionMain === null && curData.answerSystem === null && curData.answerUser === null && curData.feedbackGrade === null) {
      console.log('generateChainFirst()');
      generateChainFirst('cs');
    }
    if (curData.questionMain !== null && curData.answerSystem !== null && curData.answerUser !== null && curData.feedbackGrade === null) {
      console.log('generateChainSecond()');
      generateChainSecond();
    }
    if (curData.questionMain !== null && curData.answerSystem !== null && curData.answerUser !== null && curData.feedbackGrade !== null) {
      console.log('handleIndexState()');
      handleIndexState();
    }
  }, [dataState, indexState, generateChainFirst, generateChainSecond]);

  /* Func Public */
  const init = configState => {
    // useRef init
    const { questionType, questionMain, questionSub } = configState;

    questionTypeRef.current = questionType;
    rowRef.current = questionMain;
    colRef.current = questionSub + 1;

    // useState init
    setDataState(() => {
      const data = [];

      for (let i = 0; i < rowRef.current; i += 1) {
        data[i] = [];

        for (let j = 0; j < colRef.current; j += 1) {
          data[i][j] = {
            questionMain: null,
            answerSystem: null,
            answerUser: null,
            feedbackGrade: null,
          };
        }
      }

      return data;
    });
  };
  const submit = answerUser => {
    handleDataState({ answerUser });
  };

  /* Return */
  return {
    init,
    submit,
  };
};

export default useInterview;
