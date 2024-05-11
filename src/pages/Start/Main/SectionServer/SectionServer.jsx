import React from 'react';
import PropTypes from 'prop-types';
import Typewriter from 'typewriter-effect';

import CompDivNeon from '@/components/CompDivNeon';

import './SectionServer.scss';

/**
 *
 * @returns SectionServer
 */
function SectionServer({ onNextPhase, state }) {
  /* Return */
  return (
    <CompDivNeon className={`SectionServer ${!state.state ? 'off' : ''}`} neonColor="black">
      <Typewriter
        key={state.content}
        options={{
          cursor: '_',
          delay: 50,
        }}
        onInit={typewriter => {
          typewriter
            .typeString(state.content)
            .pauseFor(2000)
            .start()
            .callFunction(() => {
              if (state.auto) onNextPhase();
            });
        }}
      />
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
