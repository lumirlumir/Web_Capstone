import React from 'react';
import { GrPowerReset } from 'react-icons/gr';

import CompButtonLight from '@/components/CompButtonLight';
import CompFontNeon from '@/components/CompFontNeon';
import { scenarioPropTypes, scenarioPhasePropTypes } from '@/utils/propTypes';

import './FooterL.scss';

/**
 *
 * @returns FooterL
 */
function FooterL({ scenario, scenarioPhase }) {
  /* Props */
  const { scenarioPhaseState, isScenarioPhaseDone } = scenarioPhase;
  const { visibility } = scenario.phase[scenarioPhaseState.major][scenarioPhaseState.minor].FooterL;

  /* Function */
  const reload = () => {
    window.location.reload();
  };

  /* Return */
  return (
    <footer className={`FooterL ${visibility ? '' : 'invisible'} ${isScenarioPhaseDone() ? '' : 'unclickable'}`}>
      <CompButtonLight style={{ width: '60px', height: '60px' }} onClick={reload}>
        <CompFontNeon neonColor="white">
          <GrPowerReset size="32px" />
        </CompFontNeon>
      </CompButtonLight>
    </footer>
  );
}
FooterL.propTypes = {
  scenario: scenarioPropTypes.isRequired,
  scenarioPhase: scenarioPhasePropTypes.isRequired,
};
FooterL.defaultProps = {};

export default FooterL;
