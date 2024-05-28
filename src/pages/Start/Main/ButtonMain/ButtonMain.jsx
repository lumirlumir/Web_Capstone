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
  const { getSubsectionObject, scenarioPhaseState, handleNextScenarioPhaseState, toLastSubsection, isSubsectionLast, isSection } = scenario;
  const { visibility, content } = getSubsectionObject().Main.ButtonMain;
  const { handleConfigState, isConfigDone } = config;

  /* Return */
  return (
    <div className={`ButtonMain ${visibility || (isConfigDone() && isSubsectionLast()) ? '' : 'invisible'}`}>
      <CompButtonLight
        style={{ padding: '20px 30px' }}
        onClick={e => {
          if (e.ctrlKey && isSection('tutorial') && scenarioPhaseState.minor !== 0) {
            toLastSubsection();
          } else if (isSection('tutorial') && isSubsectionLast() && isConfigDone()) {
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
