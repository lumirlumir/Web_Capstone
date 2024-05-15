import React from 'react';
// import PropTypes from 'prop-types';

import CompDivNeon from '@/components/CompDivNeon';
import CompFontNeon from '@/components/CompFontNeon';

import './SectionConfig.scss';

/**
 *
 * @returns SectionConfig
 */
function SectionConfig() {
  /* Return */
  return (
    <CompDivNeon className="SectionConfig off" neonSize="s" neonColor="banana">
      <CompFontNeon neonColor="silver" neonSize="xs" fontFamily="gowun dodum" fontSize="20px">
        체크리스트 TEST.
      </CompFontNeon>
    </CompDivNeon>
  );
}
SectionConfig.propTypes = {};
SectionConfig.defaultProps = {};

export default SectionConfig;
