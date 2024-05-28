import React from 'react';

import CompFontNeon from '@/components/CompFontNeon';
import { scenarioPropTypes } from '@/utils/propTypes';

import './FooterM.scss';

/**
 *
 * @returns FooterM
 */
function FooterM({ scenario }) {
  /* Props */
  const { getCurrentChapterObject } = scenario;
  const { visibility } = getCurrentChapterObject().FooterM;

  /* Return */
  return (
    <footer className={`FooterM ${visibility ? '' : 'invisible'}`}>
      <CompFontNeon neonSize="s" fontFamily="audiowide" fontSize="35px">
        59:59:59
      </CompFontNeon>
    </footer>
  );
}
FooterM.propTypes = {
  scenario: scenarioPropTypes.isRequired,
};
FooterM.defaultProps = {};

export default FooterM;
