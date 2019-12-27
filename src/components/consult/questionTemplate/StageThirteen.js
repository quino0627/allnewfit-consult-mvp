import React from 'react';
import QuestionHeader from '../QuestionComponent/QuestionHeader';
import QuestionChoiceMultiple from '../QuestionComponent/QuestionChoiceMultiple';
import QuestionInputBox from '../QuestionComponent/QuestionInputBox';

const StageThirteen = () => {
  const title = '흡연을 하나요? 1주일에 몇 갑 정도 피나요?';
  const choices = ['흡연하지 않습니다.'];
  return (
    <div>
      <QuestionHeader title={title} />
      <QuestionChoiceMultiple choices={choices} />
      <QuestionInputBox unit="값" />
    </div>
  );
};

export default StageThirteen;
