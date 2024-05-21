import React from 'react';
import PropTypes from 'prop-types';

import CompDivNeon from '@/components/CompDivNeon';

import ButtonCount from './ButtonCount';
import CheckBox from './CheckBox';

import './SectionConfig.scss';

/**
 *
 * @returns SectionConfig
 */
function SectionConfig({ config }) {
  /* Props */
  const { configState, handleConfigState } = config;

  /* Return */
  return (
    <CompDivNeon className={`SectionConfig ${configState.visibility ? '' : 'off'}`} neonSize="m" neonColor="banana">
      <div>
        <div>
          <CheckBox onChange={() => handleConfigState({ questionType: { cs: !configState.questionType.cs } })} isChecked={configState.questionType.cs}>
            CS
          </CheckBox>
          <CheckBox onChange={() => handleConfigState({ questionType: { fe: !configState.questionType.fe } })} isChecked={configState.questionType.fe}>
            FE
          </CheckBox>
          <CheckBox onChange={() => handleConfigState({ questionType: { be: !configState.questionType.be } })} isChecked={configState.questionType.be}>
            BE
          </CheckBox>
          <CheckBox onChange={() => handleConfigState({ questionType: { db: !configState.questionType.db } })} isChecked={configState.questionType.db}>
            DB
          </CheckBox>
          <CheckBox onChange={() => handleConfigState({ questionType: { oop: !configState.questionType.oop } })} isChecked={configState.questionType.oop}>
            OOP
          </CheckBox>
        </div>
        <div>
          <ButtonCount
            onClick={e => {
              if (e.ctrlKey) handleConfigState({ questionMain: configState.questionMain - 1 });
              else handleConfigState({ questionMain: configState.questionMain + 1 });
            }}
            count={configState.questionMain}
          >
            QUESTION-MAIN:
          </ButtonCount>
          <ButtonCount
            onClick={e => {
              if (e.ctrlKey) handleConfigState({ questionSub: configState.questionSub - 1 });
              else handleConfigState({ questionSub: configState.questionSub + 1 });
            }}
            count={configState.questionSub}
          >
            QUESTION-SUB:
          </ButtonCount>
          <ButtonCount
            onClick={e => {
              if (e.ctrlKey) handleConfigState({ timeLimit: configState.timeLimit - 1 });
              else handleConfigState({ timeLimit: configState.timeLimit + 1 });
            }}
            count={configState.timeLimit}
          >
            TIME-LIMIT:
          </ButtonCount>
        </div>
      </div>
    </CompDivNeon>
  );
}
SectionConfig.propTypes = {
  config: PropTypes.shape({
    configState: PropTypes.object,
    handleVisibilityConfigState: PropTypes.func,
    handleConfigState: PropTypes.func,
  }).isRequired,
};
SectionConfig.defaultProps = {};

export default SectionConfig;
