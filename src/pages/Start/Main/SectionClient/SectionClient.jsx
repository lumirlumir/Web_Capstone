import React from 'react';

import CompDivNeon from '@/components/CompDivNeon';
import { scenarioPropTypes } from '@/utils/propTypes';

import './SectionClient.scss';

/**
 *
 * @returns SectionClient
 */
function SectionClient({ scenario }) {
  /* Props */
  const { chapter, scenarioPhaseState } = scenario;
  const { visibility } = chapter[scenarioPhaseState.major][scenarioPhaseState.minor].Main.SectionClient;

  /* Return */
  return (
    <CompDivNeon className={`SectionClient ${visibility ? '' : 'invisible'}`} neonColor="black">
      <div contentEditable="true" spellCheck="false" placeholder="$ Interviewee" />
    </CompDivNeon>
  );
}
SectionClient.propTypes = {
  scenario: scenarioPropTypes.isRequired,
};
SectionClient.defaultProps = {};

export default SectionClient;
