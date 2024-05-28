import React, { useState } from 'react';

import scenario from '@/data/scenario.json';

import FooterL from './FooterL';
import FooterM from './FooterM';
import FooterR from './FooterR';
import HeaderL from './HeaderL';
import HeaderR from './HeaderR';
import Main from './Main';

import './Start.scss';

/**
 *
 * @returns Start
 */
function Start() {
  /* useState */
  // scenarioPhase
  const [scenarioPhaseState, setScenarioPhaseState] = useState({
    major: 0,
    minor: 0,
  });
  const handleNextScenarioPhaseState = type => {
    const newScenarioPhaseState = scenarioPhaseState[type] + 1;

    if (type === 'major' && newScenarioPhaseState < scenario.phase.length) {
      setScenarioPhaseState(prevState => ({ ...prevState, major: newScenarioPhaseState, minor: 0 }));
    } else if (type === 'minor' && newScenarioPhaseState < scenario.phase[scenarioPhaseState.major].length) {
      setScenarioPhaseState(prevState => ({ ...prevState, [type]: newScenarioPhaseState }));
    }
  };
  const handleSkipScenarioPhaseState = () => {
    // for minor phase
    const newScenarioPhaseState = scenario.phase[scenarioPhaseState.major].length - 1;

    setScenarioPhaseState(prevState => ({ ...prevState, minor: newScenarioPhaseState }));
  };
  const isScenarioPhaseDone = () => {
    // for minor phase
    return scenarioPhaseState.minor === scenario.phase[scenarioPhaseState.major].length - 1;
  };
  const isTutorialPhase = () => {
    return scenarioPhaseState.major === 0;
  };
  const isInterviewPhase = () => {
    return scenarioPhaseState.major === 1;
  };
  const scenarioPhase = {
    scenarioPhaseState,
    handleNextScenarioPhaseState,
    handleSkipScenarioPhaseState,
    isScenarioPhaseDone,
    isTutorialPhase,
    isInterviewPhase,
  };
  // config
  const [configState, setConfigState] = useState({
    visibility: false,
    questionType: {
      cs: false,
      fe: false,
      be: false,
      db: false,
      oop: false,
    },
    questionMain: 0,
    questionSub: 0,
    timeLimit: 0,
  });
  const handleConfigState = obj => {
    setConfigState(prevState => ({
      ...prevState,
      ...obj,
      questionType: {
        ...prevState.questionType,
        ...obj.questionType,
      },
    }));
  };
  const isConfigDone = () => {
    const { cs, fe, be, db, oop } = configState.questionType;
    const { questionMain, questionSub, timeLimit } = configState;

    return (cs || fe || be || db || oop) && questionMain && questionSub && timeLimit;
  };
  const config = {
    configState,
    handleConfigState,
    isConfigDone,
  };
  // useQuestionMain
  // const [arrayCsQuestionMain, generateCsQuestionMain] = useQuestionMain('cs', 3);
  // const [arrayFeQuestionMain, generateFeQuestionMain] = useQuestionMain('fe', 3);
  // const [arrayBeQuestionMain, generateBeQuestionMain] = useQuestionMain('be', 3);
  // const [arrayDbQuestionMain, generateDbQuestionMain] = useQuestionMain('db', 3);
  // const [arrayOopQuestionMain, generateOopQuestionMain] = useQuestionMain('oop', 3);

  // useAnswer
  // const [arrayCsAnswerSystem, generateCsAnswerSystem] = useAnswerSystem(['react란 무엇인가요?', '알고리즘이 무엇인가요?', 'axios 라이브러리가 무엇인가요?']);

  /* Return */
  return (
    <div className="Start">
      <HeaderL scenario={scenario} scenarioPhase={scenarioPhase} config={config} />
      <HeaderR scenario={scenario} scenarioPhase={scenarioPhase} />
      <Main scenario={scenario} scenarioPhase={scenarioPhase} config={config} />
      <FooterL scenario={scenario} scenarioPhase={scenarioPhase} />
      <FooterM scenario={scenario} scenarioPhase={scenarioPhase} />
      <FooterR scenario={scenario} scenarioPhase={scenarioPhase} />
    </div>
  );
}

export default Start;
