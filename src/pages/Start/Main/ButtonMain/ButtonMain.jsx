import React from 'react';

import CompButtonLight from '@/components/CompButtonLight';
import CompFontNeon from '@/components/CompFontNeon';
import { scenarioPropTypes, scenarioPhasePropTypes } from '@/utils/propTypes';

import './ButtonMain.scss';

/**
 *
 * @returns ButtonMain
 */
function ButtonMain({ scenario, scenarioPhase }) {
  /* Props */
  const { scenarioPhaseState, handleNextScenarioPhaseState, handleSkipScenarioPhaseState } = scenarioPhase;
  const { visibility, content } = scenario.phase[scenarioPhaseState].Main.ButtonMain;

  /* Return */
  return (
    <div className={`ButtonMain ${visibility ? '' : 'invisible'}`}>
      <CompButtonLight
        style={{ padding: '20px 30px' }}
        onClick={e => {
          if (e.ctrlKey && scenarioPhaseState !== 0) {
            handleSkipScenarioPhaseState();
          } else {
            handleNextScenarioPhaseState();
          }
        }}
      >
        <CompFontNeon neonColor="white" neonSize="s" fontFamily="Audiowide" fontSize="40px">
          {content}
        </CompFontNeon>
      </CompButtonLight>
    </div>
  );
}
ButtonMain.propTypes = {
  scenario: scenarioPropTypes.isRequired,
  scenarioPhase: scenarioPhasePropTypes.isRequired,
};
ButtonMain.defaultProps = {};

export default ButtonMain;
