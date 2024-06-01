import { useState, useMemo, useEffect } from 'react';

import { generateQuestionMain, generateAnswerSystem, generateFeedbackGrade, generateQuestionSub } from '@/services/openaiService';

const useInterview = configState => {
  /* Variables */
  const {
    // questionType: { cs, fe, be, db, oop },
    questionMain,
    questionSub,
  } = configState;

  /* Hooks */
  // useMemo
  const rows = useMemo(() => questionMain, [questionMain]);
  const cols = useMemo(() => questionSub + 1, [questionSub]);
  // useState
  const [dataState, setDataState] = useState(() => {
    const data = [];

    for (let i = 0; i < rows; i += 1) {
      data[i] = [];

      for (let j = 0; j < cols; j += 1) {
        data[i][j] = {
          questionMain: '',
          answerSystem: '',
          answerUser: '',
          feedbackGrade: '',
        };
      }
    }

    return data;
  });
  const [dataRowColState, setRowColState] = useState({
    // name to index
    row: 0,
    col: 0,
  });
  // useEffect
  useEffect(() => {
    if (dataState[dataRowColState.row][dataRowColState.col].answerUser === '') return;

    generateFeedbackGrade(dataState[dataRowColState.row][dataRowColState.col].answerSystem, dataState[dataRowColState.row][dataRowColState.col].answerUser)
      .then(result => {
        setDataState(prevState => {
          const newData = [...prevState];

          newData[dataRowColState.row] = [...prevState[dataRowColState.row]];

          newData[dataRowColState.row][dataRowColState.col] = {
            ...prevState[dataRowColState.row][dataRowColState.col],
            feedbackGrade: JSON.parse(result),
          };

          return newData;
        });
      })
      .then(
        setRowColState(prevState => {
          if (prevState.col + 1 < cols) {
            return {
              ...prevState,
              col: prevState.col + 1,
            };
          }
          if (prevState.row + 1 < rows) {
            return {
              ...prevState,
              row: prevState.row + 1,
              col: 0,
            };
          }
          return prevState;
        }),
      );
  }, [dataState, dataRowColState.row, dataRowColState.col, rows, cols]);

  /* Func private */
  const getQuestionMainHistory = () => {
    const questionMainHistory = [];

    for (let i = 0; i <= dataRowColState.row - 1; i += 1) {
      questionMainHistory.push(dataState[i][0].questionMain);
    }

    return questionMainHistory;
  };

  /* Func public */
  const generate = questionType => {
    if (dataRowColState.col === 0) {
      generateQuestionMain(questionType, getQuestionMainHistory())
        .then(result => {
          setDataState(prevState => {
            const newData = [...prevState];

            newData[dataRowColState.row] = [...prevState[dataRowColState.row]];

            newData[dataRowColState.row][dataRowColState.col] = {
              ...prevState[dataRowColState.row][dataRowColState.col],
              questionMain: result,
            };

            return newData;
          });

          return result;
        })
        .then(PrevResult => {
          generateAnswerSystem(PrevResult).then(result => {
            setDataState(prevState => {
              const newData = [...prevState];

              newData[dataRowColState.row] = [...prevState[dataRowColState.row]];

              newData[dataRowColState.row][dataRowColState.col] = {
                ...prevState[dataRowColState.row][dataRowColState.col],
                answerSystem: result,
              };

              return newData;
            });
          });
        });
    } else {
      generateQuestionSub(dataState[dataRowColState.row][dataRowColState.col - 1].questionMain, dataState[dataRowColState.row][dataRowColState.col - 1].answerUser)
        .then(result => {
          setDataState(prevState => {
            const newData = [...prevState];

            newData[dataRowColState.row] = [...prevState[dataRowColState.row]];

            newData[dataRowColState.row][dataRowColState.col] = {
              ...prevState[dataRowColState.row][dataRowColState.col],
              questionMain: result,
            };

            return newData;
          });

          return result;
        })
        .then(PrevResult => {
          generateAnswerSystem(PrevResult).then(result => {
            setDataState(prevState => {
              const newData = [...prevState];

              newData[dataRowColState.row] = [...prevState[dataRowColState.row]];

              newData[dataRowColState.row][dataRowColState.col] = {
                ...prevState[dataRowColState.row][dataRowColState.col],
                answerSystem: result,
              };

              return newData;
            });
          });
        });
    }
  };
  const submit = answerUser => {
    setDataState(prevState => {
      const newData = [...prevState];

      newData[dataRowColState.row] = [...prevState[dataRowColState.row]];

      newData[dataRowColState.row][dataRowColState.col] = {
        ...prevState[dataRowColState.row][dataRowColState.col],
        answerUser,
      };

      return newData;
    });
  };

  /* Return */
  return {
    generate,
    submit,
  };
};

export default useInterview;
