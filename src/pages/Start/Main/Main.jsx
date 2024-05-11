import React, { useState } from 'react';

import scenarioMain from '@/data/scenarioMain.json';

import ButtonMain from './ButtonMain';
import Heading from './Heading';
import SectionServer from './SectionServer';

import './Main.scss';

/**
 *
 * @returns Main
 */
function Main() {
  /* State */
  // Phase Sequence
  const [phaseState, setPhaseState] = useState(0);
  // SectionServer
  const [sectionServerState, setSectionServerState] = useState(scenarioMain.phase[phaseState].SectionServer);
  const handleSectionServerState = newState => {
    setSectionServerState(newState);
  };
  // buttonMain
  const [buttonMainState, setButtonMainState] = useState(scenarioMain.phase[phaseState].ButtonMain);
  const handleButtonMainState = newState => {
    setButtonMainState(newState);
  };

  /* Function */
  const nextPhase = () => {
    const newPhaseState = phaseState + 1;
    if (newPhaseState < scenarioMain.phase.length) {
      setPhaseState(newPhaseState);
      handleSectionServerState(scenarioMain.phase[newPhaseState].SectionServer);
      handleButtonMainState(scenarioMain.phase[newPhaseState].ButtonMain);
    }
  };

  /* Return */
  return (
    <main className="Main">
      <div>
        <Heading />
        <SectionServer state={sectionServerState} onNextPhase={nextPhase} />
        <ButtonMain state={buttonMainState} onClick={nextPhase} />
      </div>
    </main>
  );
}

export default Main;

//  <CompDivNeon className={`config ${buttonState}`} neonColor="banana">
//           <div>
//             <input type="checkbox" onChange={() => {}} />
//             Configuration Check Boxes
//           </div>
//         </CompDivNeon>
