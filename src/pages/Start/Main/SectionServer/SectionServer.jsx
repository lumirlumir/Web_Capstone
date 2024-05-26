import React, { useState, useRef, useEffect } from 'react';
import Typewriter from 'typewriter-effect';

import CompDivNeon from '@/components/CompDivNeon';
import { scenarioPropTypes, scenarioPhasePropTypes, configPropTypes } from '@/utils/propTypes';

import './SectionServer.scss';

/**
 *
 * @returns SectionServer
 */
function SectionServer({ scenario, scenarioPhase, config }) {
  /* Props */
  const { scenarioPhaseState, handleNextScenarioPhaseState } = scenarioPhase;
  const { auto } = scenario.phase[scenarioPhaseState.major][scenarioPhaseState.minor].global;
  const { visibility, content } = scenario.phase[scenarioPhaseState.major][scenarioPhaseState.minor].Main.SectionServer;
  const { configState } = config;

  /* useState */
  const [contentHistoryState, setContentHistoryState] = useState('');

  /* useRef */
  const scrollRef = useRef();

  /* useEffect */
  useEffect(() => {
    if (scenarioPhaseState.minor > 1) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    }
  }, [scenarioPhaseState.minor]);

  /* Return */
  return (
    <CompDivNeon className={`SectionServer ${visibility && !configState.visibility ? '' : 'invisible'}`} neonColor="black">
      <div>{contentHistoryState}</div>
      <div>
        <Typewriter
          key={content}
          options={{
            cursor: '_',
            delay: 50, // original: 50
          }}
          onInit={typewriter => {
            typewriter
              .typeString(content)
              .pauseFor(3000) // original: 3000
              .start()
              .callFunction(() => {
                setContentHistoryState(`${contentHistoryState}${content}`);
                if (auto) handleNextScenarioPhaseState('minor');
              });
          }}
        />
      </div>
      <div className="ref" ref={scrollRef} />
    </CompDivNeon>
  );
}
SectionServer.propTypes = {
  scenario: scenarioPropTypes.isRequired,
  scenarioPhase: scenarioPhasePropTypes.isRequired,
  config: configPropTypes.isRequired,
};
SectionServer.defaultProps = {};

export default SectionServer;
