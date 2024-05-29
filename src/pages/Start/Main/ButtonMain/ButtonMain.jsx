import React, { useMemo } from 'react';

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
  const { isSection, subsectionState, getSubsectionObject, toNextSubsection, toLastSubsection, isSubsectionLast } = scenario;
  const { content } = getSubsectionObject().Main.ButtonMain;
  const { handleConfigState, isConfigDone } = config;

  /* Hooks */
  // useMemo
  const visibility = useMemo(() => {
    const { visibility: _visibility } = getSubsectionObject().Main.ButtonMain;

    if (_visibility === null) {
      return isConfigDone();
    }
    return _visibility;
  }, [getSubsectionObject, isConfigDone]);

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

            if (isSection('tutorial') && isConfigDone() && isSubsectionLast()) {
              handleConfigState({ visibility: false });
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
};
ButtonMain.defaultProps = {};

export default ButtonMain;
