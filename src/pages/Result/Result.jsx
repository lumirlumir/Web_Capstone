import React from 'react';

import './Result.scss';

/**
 *
 * @returns Result
 */
function Result() {
  return (
    <div className="Result">
      <div className="grade">등급</div>
      <div className="gradeDetailed">세부 등급</div>
      <div className="info">면접관 종합의견</div>
      <div className="others">인터뷰이 정보 및 질문과 질문에 대한 답변 히스토리 모달창 띄우기</div>
      <div className="start">처음으로 돌아가기</div>
    </div>
  );
}

export default Result;
