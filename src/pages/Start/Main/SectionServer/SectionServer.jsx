import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Typewriter from 'typewriter-effect';

import CompDivNeon from '@/components/CompDivNeon';

import './SectionServer.scss';

/**
 *
 * @returns SectionServer
 */
function SectionServer({ scenario, scenarioPhase }) {
  /* Props */
  const { scenarioPhaseState, handleNextScenarioPhaseState } = scenarioPhase;
  const { visibility, content, auto } = scenario.phase[scenarioPhaseState].Main.SectionServer;

  /* useState */
  const [contentHistoryState, setContentHistoryState] = useState('');

  /* useRef */
  const scrollRef = useRef();

  /* useEffect */
  useEffect(() => {
    if (scenarioPhaseState > 1) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    }
  }, [scenarioPhaseState]);

  /* Return */
  return (
    <CompDivNeon className={`SectionServer ${visibility ? '' : 'off'}`} neonColor="black">
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
                if (auto) handleNextScenarioPhaseState();
              });
          }}
        />
      </div>
      <div className="ref" ref={scrollRef} />
    </CompDivNeon>
  );
}
SectionServer.propTypes = {
  scenario: PropTypes.object.isRequired,
  scenarioPhase: PropTypes.shape({
    scenarioPhaseState: PropTypes.number,
    handleNextScenarioPhaseState: PropTypes.func,
    handleSkipScenarioPhaseState: PropTypes.func,
  }).isRequired,
};
SectionServer.defaultProps = {};

export default SectionServer;
