import React from 'react';

import useScenario from '@/hooks/useScenario';
import useConfig from '@/hooks/useConfig';
import useInterview from '@/hooks/useInterview';

import FooterL from './FooterL';
import FooterM from './FooterM';
import FooterR from './FooterR';
import HeaderL from './HeaderL';
import HeaderR from './HeaderR';
import Main from './Main';

import './Start.scss';

/**
 *
 * @returns Start
 */
function Start() {
  /* Hooks */
  const scenario = useScenario();
  const config = useConfig();
  const interview = useInterview();

  /* Return */
  return (
    <div className="Start">
      <HeaderL scenario={scenario} config={config} />
      <HeaderR scenario={scenario} />
      <Main scenario={scenario} config={config} interview={interview} />
      <FooterL scenario={scenario} />
      <FooterM scenario={scenario} />
      <FooterR scenario={scenario} interview={interview} />
    </div>
  );
}

export default Start;
