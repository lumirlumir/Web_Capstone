import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Typewriter from 'typewriter-effect';

import CompDivNeon from '@/components/CompDivNeon';

import './SectionServer.scss';

/**
 *
 * @returns SectionServer
 */
function SectionServer({ onNextPhase, state }) {
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
    <CompDivNeon className={`SectionServer ${!state.state ? 'off' : ''}`} neonColor="black">
      <div>{contentHistoryState}</div>
      <Typewriter
        key={state.content}
        options={{
          cursor: '_',
          delay: 50,
        }}
        onInit={typewriter => {
          typewriter
            .typeString(state.content)
            .pauseFor(1500)
            .start()
            .callFunction(() => {
              setContentHistoryState(`${contentHistoryState}${state.content}`);
              if (state.auto) onNextPhase();
            });
        }}
      />
      <div ref={scrollRef} />
    </CompDivNeon>
  );
}
SectionServer.propTypes = {
  onNextPhase: PropTypes.func.isRequired,
  state: PropTypes.shape({
    state: PropTypes.bool, // true: on(visible), false: off(invisible)
    content: PropTypes.string,
    auto: PropTypes.bool, // true: auto, false: manual
  }).isRequired,
};
SectionServer.defaultProps = {};

export default SectionServer;
