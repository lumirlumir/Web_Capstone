import React from 'react';

import CompButtonLight from '@/components/CompButtonLight';
import CompFontNeon from '@/components/CompFontNeon';
import { scenarioPropTypes, scenarioPhasePropTypes, configPropTypes } from '@/utils/propTypes';

import './ButtonMain.scss';

/**
 *
 * @returns ButtonMain
 */
function ButtonMain({ scenario, scenarioPhase, config }) {
  /* Props */
  const { scenarioPhaseState, handleNextScenarioPhaseState, handleSkipScenarioPhaseState, isScenarioPhaseDone } = scenarioPhase;
  const { visibility, content } = scenario.phase[scenarioPhaseState.major][scenarioPhaseState.minor].Main.ButtonMain;
  const { isConfigDone } = config;

  /* Return */
  return (
    <div className={`ButtonMain ${visibility || (isConfigDone() && isScenarioPhaseDone()) ? '' : 'invisible'}`}>
      <CompButtonLight
        style={{ padding: '20px 30px' }}
        onClick={e => {
          if (e.ctrlKey && scenarioPhaseState.minor !== 0) {
            handleSkipScenarioPhaseState();
          } else {
            handleNextScenarioPhaseState('minor');
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
  config: configPropTypes.isRequired,
};
ButtonMain.defaultProps = {};

export default ButtonMain;
