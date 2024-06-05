import React from 'react';
import { IoExitOutline } from 'react-icons/io5';
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

import CompButtonLight from '@/components/CompButtonLight';
import CompFontNeon from '@/components/CompFontNeon';
import { scenarioPropTypes, interviewPropTypes } from '@/utils/propTypes';

import './FooterR.scss';

/**
 *
 * @returns FooterR
 */
function FooterR({ scenario, interview }) {
  /* Props */
  const { visibility, clickability } = scenario.getSubsectionObj().FooterR;
  const { submit, isInterviewDone } = interview;

  /* Function */
  const doNothing = () => {
    if (isInterviewDone()) {
      return;
      // TODO
    }

    submit();
  };

  /* Return */
  return (
    <footer className={`FooterR ${visibility ? '' : 'invisible'} ${clickability ? '' : 'unclickable'}`}>
      <CompButtonLight style={{ width: '60px', height: '60px' }} onClick={doNothing}>
        <CompFontNeon neonColor="white">{isInterviewDone() ? <IoExitOutline size="37px" /> : <IoIosCheckmarkCircleOutline size="39px" />}</CompFontNeon>
      </CompButtonLight>
    </footer>
  );
}
FooterR.propTypes = {
  scenario: scenarioPropTypes.isRequired,
  interview: interviewPropTypes.isRequired,
};
FooterR.defaultProps = {};

export default FooterR;
