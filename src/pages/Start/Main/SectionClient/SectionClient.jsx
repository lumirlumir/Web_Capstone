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
  const { getSubsectionObject } = scenario;
  const { visibility } = getSubsectionObject().Main.SectionClient;

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
