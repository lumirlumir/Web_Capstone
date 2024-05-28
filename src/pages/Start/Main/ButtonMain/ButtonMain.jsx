import React from 'react';

import CompButtonLight from '@/components/CompButtonLight';
import CompFontNeon from '@/components/CompFontNeon';
import { scenarioPropTypes, configPropTypes } from '@/utils/propTypes';

import './ButtonMain.scss';

/**
 *
 * @returns ButtonMain
 */
function ButtonMain({ scenario, config }) {
  /* Props */
  const { getCurrentChapterObject, scenarioPhaseState, handleNextScenarioPhaseState, handleSkipScenarioPhaseState, isScenarioPhaseDone, isTutorialPhase } = scenario;
  const { visibility, content } = getCurrentChapterObject().Main.ButtonMain;
  const { handleConfigState, isConfigDone } = config;

  /* Return */
  return (
    <div className={`ButtonMain ${visibility || (isConfigDone() && isScenarioPhaseDone()) ? '' : 'invisible'}`}>
      <CompButtonLight
        style={{ padding: '20px 30px' }}
        onClick={e => {
          if (e.ctrlKey && isTutorialPhase() && scenarioPhaseState.minor !== 0) {
            handleSkipScenarioPhaseState();
          } else if (isTutorialPhase() && isScenarioPhaseDone() && isConfigDone()) {
            handleNextScenarioPhaseState('major');
            handleConfigState({ visibility: false });
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
  config: configPropTypes.isRequired,
};
ButtonMain.defaultProps = {};

export default ButtonMain;
