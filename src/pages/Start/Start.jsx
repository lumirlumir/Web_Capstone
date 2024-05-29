import React from 'react';

import useConfig from '@/hooks/useConfig';
import useScenario from '@/hooks/useScenario';

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
  /* Hooks */
  const config = useConfig();
  const scenario = useScenario();

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
      <HeaderL scenario={scenario} config={config} />
      <HeaderR scenario={scenario} />
      <Main scenario={scenario} config={config} />
      <FooterL scenario={scenario} />
      <FooterM scenario={scenario} />
      <FooterR scenario={scenario} />
    </div>
  );
}

export default Start;
