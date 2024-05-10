import React from 'react';

import CompDivNeon from '@/components/CompDivNeon';
import CompFontNeon from '@/components/CompFontNeon';

import './SectionR.scss';

/**
 *
 * @returns SectionR
 */
function SectionR() {
  return (
    <CompDivNeon className="section SectionR" neonColor="blue" neonSize="s" borderWidth="2px">
      <CompFontNeon neonColor="silver" neonSize="xs" fontFamily="gowun dodum" fontSize="20px">
        Answer <br />
        <br />
        Express.js와 Java Springboot의 차이점은 다음과 같습니다. <br /> Express.js는 비동기 처리 기반의 Node.js 런타임 상에서 작동하는 프레임워크 입니다.
      </CompFontNeon>
    </CompDivNeon>
  );
}

export default SectionR;
