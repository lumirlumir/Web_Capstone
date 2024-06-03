import React from 'react';

import CompDivNeon from '@/components/CompDivNeon';
import { scenarioPropTypes, interviewPropTypes } from '@/utils/propTypes';

import './SectionClient.scss';

/**
 *
 * @returns SectionClient
 */
function SectionClient({ scenario, interview }) {
  /* Props */
  const { getSubsectionObject } = scenario;
  const { visibility } = getSubsectionObject().Main.SectionClient;
  const { contentRef, set } = interview;

  /* Return */
  return (
    <CompDivNeon className={`SectionClient ${visibility ? '' : 'invisible'}`} neonColor="black">
      <div ref={contentRef} contentEditable="true" spellCheck="false" placeholder="$ Interviewee" onInput={e => set(e.currentTarget.textContent)} />
    </CompDivNeon>
  );
}
SectionClient.propTypes = {
  scenario: scenarioPropTypes.isRequired,
  interview: interviewPropTypes.isRequired,
};
SectionClient.defaultProps = {};

export default SectionClient;
