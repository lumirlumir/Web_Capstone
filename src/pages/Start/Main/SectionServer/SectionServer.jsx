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
  const { scenarioPhaseState, handleScenarioPhaseState } = scenarioPhase;
  const { visibility, content, auto } = scenario.phase[scenarioPhaseState].SectionServer;

  /* useState */
  const [contentHistoryState, setContentHistoryState] = useState('');

  /* useRef */
  const scrollRef = useRef();

  /* useEffect */
  useEffect(() => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  }, [contentHistoryState]);

  /* Return */
  return (
    <CompDivNeon className={`SectionServer ${visibility ? '' : 'off'}`} neonColor="black">
      <div>{contentHistoryState}</div>
      <Typewriter
        key={content}
        options={{
          cursor: '_',
          delay: 50,
        }}
        onInit={typewriter => {
          typewriter
            .typeString(content)
            .pauseFor(1500)
            .start()
            .callFunction(() => {
              setContentHistoryState(`${contentHistoryState}${content}`);
              if (auto) handleScenarioPhaseState();
            });
        }}
      />
      <div ref={scrollRef} />
    </CompDivNeon>
  );
}
SectionServer.propTypes = {
  scenario: PropTypes.object.isRequired,
  scenarioPhase: PropTypes.shape({
    scenarioPhaseState: PropTypes.number,
    handleScenarioPhaseState: PropTypes.func,
  }).isRequired,
};
SectionServer.defaultProps = {};

export default SectionServer;
