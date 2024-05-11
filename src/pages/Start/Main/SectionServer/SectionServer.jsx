import React from 'react';
import PropTypes from 'prop-types';

import CompDivNeon from '@/components/CompDivNeon';

import './SectionServer.scss';

/**
 *
 * @returns SectionServer
 */
function SectionServer({ state }) {
  return (
    <CompDivNeon className={`SectionServer ${!state.state ? 'off' : ''}`} neonColor="black">
      $ ChatGPT <br />
      <br />
      &gt; 안녕하세요 Chat-GPT를 활용한 인터뷰 서비스에 오신 것을 환영합니다. <br /> &gt; 해당 인터뷰 서비스는 CS, FE, BE, DB, OOP 총 5가지 분야에 대한 지식을 평가합니다.
    </CompDivNeon>
  );
}
SectionServer.propTypes = {
  state: PropTypes.shape({
    content: PropTypes.string,
    state: PropTypes.bool,
  }).isRequired,
};
SectionServer.defaultProps = {};

export default SectionServer;
