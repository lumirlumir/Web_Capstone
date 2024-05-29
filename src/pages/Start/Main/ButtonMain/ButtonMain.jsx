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
  const { isSection, subsectionState, getSubsectionObject, toNextSubsection, toLastSubsection, isSubsectionLast } = scenario;
  const { visibility, content } = getSubsectionObject().Main.ButtonMain;
  const { handleConfigState, isConfigDone } = config;

  /* Return */
  return (
    <div className={`ButtonMain ${visibility || (isConfigDone() && isSubsectionLast()) ? '' : 'invisible'}`}>
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
