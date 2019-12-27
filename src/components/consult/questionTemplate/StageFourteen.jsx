import React from 'react';
import QuestionHeader from '../QuestionComponent/QuestionHeader';
import QuestionChoiceMultiple from '../QuestionComponent/QuestionChoiceMultiple';
import QuestionInputBox from '../QuestionComponent/QuestionInputBox';

const StageThirteen = () => {
  const title = '현재 복용중인 약이 있나요? 먹고 있다면 그 이유를 적어주세요';
  const choices = ['약을 먹고있지 않습니다.'];
  return (
    <div>
      <QuestionHeader title={title} />
      <QuestionChoiceMultiple choices={choices} />
      <QuestionInputBox long="true" />
    </div>
  );
};

export default StageThirteen;
