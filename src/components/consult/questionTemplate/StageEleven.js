import React from 'react';
import QuestionHeader from '../QuestionComponent/QuestionHeader';
import QuestionChoiceMultiple from '../QuestionComponent/QuestionChoiceMultiple';

const StageEleven = () => {
  const title = '의사로부터 수치가 높다는 진단을 받은 적 있는 것을 모두 클릭해 주세요';
  const choices = ['콜레스테롤', '혈당'];
  return (
    <div>
      <QuestionHeader title={title} />
      <QuestionChoiceMultiple choices={choices} />
    </div>
  );
};

export default StageEleven;
