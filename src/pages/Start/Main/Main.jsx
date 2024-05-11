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
  /* Variables */
  let phase = 0; // scenarioMain's phase sequence

  /* State */
  // SectionServer
  const [sectionServerState, setSectionServerState] = useState({
    state: scenarioMain.phase[phase].SectionServer.state, // true: on(visible), false: off(invisible)
    content: scenarioMain.phase[phase].SectionServer.content,
  });
  const handleSectionServerState = (state, content) => {
    setSectionServerState({ state, content });
  };
  // buttonMain
  const [buttonMainState, setButtonMainState] = useState({
    state: scenarioMain.phase[phase].ButtonMain.state, // true: on(visible), false: off(invisible)
    content: scenarioMain.phase[phase].ButtonMain.content,
  });
  const handleButtonMainState = (state, content) => {
    setButtonMainState({ state, content });
  };

  /* Function */
  const nextPhase = () => {
    // to the next scenarioMain's phase sequence
    phase += 1;
    handleSectionServerState(scenarioMain.phase[phase].SectionServer.state, scenarioMain.phase[phase].SectionServer.content);
    handleButtonMainState(scenarioMain.phase[phase].ButtonMain.state, scenarioMain.phase[phase].ButtonMain.content);
  };

  /* Return */
  return (
    <main className="Main">
      <div>
        <Heading />
        <SectionServer state={sectionServerState} />
        <ButtonMain onClick={nextPhase} state={buttonMainState} />
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
