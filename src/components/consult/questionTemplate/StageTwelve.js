import React from 'react';
import QuestionHeader from '../QuestionComponent/QuestionHeader';
import QuestionChoiceMultiple from '../QuestionComponent/QuestionChoiceMultiple';

const StageTwelve = () => {
  const title =
    '최근 12개월 동안 부상이나 질병으로 입원했던 적이 있나요? 상세 기술 textarea 만들어야 함';
  const choices = ['네', '아닙니다.'];
  return (
    <div>
      <QuestionHeader title={title} />
      <QuestionChoiceMultiple choices={choices} />
    </div>
  );
};

export default StageTwelve;
