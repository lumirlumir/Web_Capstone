import React, { useEffect, useLayoutEffect, useMemo } from 'react';
import Typewriter from 'typewriter-effect';

import CompDivNeon from '@/components/CompDivNeon';
import useScroll from '@/hooks/utils/useScroll';
import useHistoryState from '@/hooks/utils/useHistoryState';
import { scenarioPropTypes, configPropTypes, interviewPropTypes } from '@/utils/propTypes';

import './SectionServer.scss';

/**
 *
 * @returns SectionServer
 */
function SectionServer({ scenario, config, interview }) {
  /* Props */
  const { subsectionState, getSubsectionObj, toNextSubsection } = scenario;
  const { auto, api } = getSubsectionObj().global;
  const { visibility, content } = getSubsectionObj().Main.SectionServer;
  const { configState } = config;
  const { getInterviewInfo, getQuestion, isInterviewDone } = interview;

  /* Hooks */
  // custom
  const { scrollRef, scroll } = useScroll();
  const { historyState, addHistory } = useHistoryState();
  // useMemo
  const text = useMemo(() => {
    if (api) return getQuestion() === null ? '' : `> ${getInterviewInfo().questionType.toUpperCase()}분야 ${getInterviewInfo().questionMain}-${getInterviewInfo().questionSub}번 문제입니다. ${getQuestion()}\n\n`;

    return content;
  }, [api, content, getInterviewInfo, getQuestion]);
  // useLayoutEffect
  useLayoutEffect(() => {
    addHistory(text);
  }, [subsectionState, text, addHistory]);
  // useEffect
  useEffect(() => {
    if (api && isInterviewDone()) toNextSubsection();
  }, [getQuestion, isInterviewDone, toNextSubsection, api]);

  /* Return */
  return (
    <CompDivNeon className={`SectionServer ${visibility && !configState.visibility ? '' : 'invisible'}`} neonColor="black">
      <div>{historyState.slice(0, -1)}</div>
      <div>
        <Typewriter
          key={text}
          options={{
            cursor: '_',
            delay: 50, // original: 50
          }}
          onInit={typewriter => {
            typewriter
              .pauseFor(2000) // original: 2000
              .typeString(text)
              .pauseFor(1000) // original: 1000
              .start()
              .callFunction(() => {
                if (auto) toNextSubsection();
                scroll();
              });
          }}
        />
      </div>
      <div className="ref" ref={scrollRef} />
    </CompDivNeon>
  );
}
SectionServer.propTypes = {
  scenario: scenarioPropTypes.isRequired,
  config: configPropTypes.isRequired,
  interview: interviewPropTypes.isRequired,
};
SectionServer.defaultProps = {};

export default SectionServer;
