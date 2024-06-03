import React, { useMemo } from 'react';

import CompButtonLight from '@/components/CompButtonLight';
import CompFontNeon from '@/components/CompFontNeon';
import { scenarioPropTypes, configPropTypes, interviewPropTypes } from '@/utils/propTypes';

import './ButtonMain.scss';

/**
 *
 * @returns ButtonMain
 */
function ButtonMain({ scenario, config, interview }) {
  /* Props */
  const { isSection, subsectionState, getSubsectionObj, toNextSubsection, toLastSubsection } = scenario;
  const { content } = getSubsectionObj().Main.ButtonMain;
  const { configState, handleConfigState, isConfigDone } = config;
  const { init } = interview;

  /* Hooks */
  // useMemo
  const visibility = useMemo(() => {
    const { visibility: _visibility } = getSubsectionObj().Main.ButtonMain;

    if (_visibility === null) {
      return isConfigDone();
    }
    return _visibility;
  }, [getSubsectionObj, isConfigDone]);

  /* Return */
  return (
    <div className={`ButtonMain ${visibility ? '' : 'invisible'}`}>
      <CompButtonLight
        style={{ padding: '20px 30px' }}
        onClick={e => {
          if (e.ctrlKey && isSection('tutorial') && subsectionState !== 0) {
            toLastSubsection();
          } else {
            toNextSubsection();

            if (isSection('tutorial') && isConfigDone()) {
              handleConfigState({ visibility: false });
              init(configState);
            }
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
  interview: interviewPropTypes.isRequired,
};
ButtonMain.defaultProps = {};

export default ButtonMain;
