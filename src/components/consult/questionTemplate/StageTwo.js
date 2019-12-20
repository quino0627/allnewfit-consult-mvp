import React from 'react';
import QuestionHeader from '../QuestionComponent/QuestionHeader';
import QuestionChoiceMultiple from '../QuestionComponent/QuestionChoiceMultiple';

const StageTwo = () => {
  const title = '현재 운동 중이신가요?';
  const choices = ['예', '아닙니다'];
  return (
    <div>
      <QuestionHeader title={title} />
      <QuestionChoiceMultiple choices={choices} />
    </div>
  );
};

export default StageTwo;
