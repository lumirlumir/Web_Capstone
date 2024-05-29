import React, { useState, useRef, useEffect } from 'react';
import Typewriter from 'typewriter-effect';

import CompDivNeon from '@/components/CompDivNeon';
import { scenarioPropTypes, configPropTypes } from '@/utils/propTypes';

import './SectionServer.scss';

/**
 *
 * @returns SectionServer
 */
function SectionServer({ scenario, config }) {
  /* Props */
  const { getSubsectionObject, subsectionState, toNextSubsection } = scenario;
  const { auto } = getSubsectionObject().global;
  const { visibility, content } = getSubsectionObject().Main.SectionServer;
  const { configState } = config;

  /* Hooks */
  // useState
  const [contentHistoryState, setContentHistoryState] = useState('');
  // useRef
  const scrollRef = useRef();
  // useEffect
  useEffect(() => {
    if (subsectionState > 1) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    }
  }, [subsectionState]);

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
              .pauseFor(2000) // original: 2000
              .typeString(content)
              .pauseFor(1000) // original: 1000
              .start()
              .callFunction(() => {
                setContentHistoryState(`${contentHistoryState}${content}`);
                if (auto) toNextSubsection();
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
  config: configPropTypes.isRequired,
};
SectionServer.defaultProps = {};

export default SectionServer;
