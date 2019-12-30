import React from 'react';
import QuestionHeader from '../QuestionComponent/QuestionHeader';
import QuestionChoiceMultiple from '../QuestionComponent/QuestionChoiceMultiple';
import QuestionInputBox from '../QuestionComponent/QuestionInputBox';

const StageFourteen = ({ question, onChange }) => {
  const { type, choices, title, number, value } = question;

  return (
    <div>
      <QuestionHeader title={title} />
      <QuestionChoiceMultiple number={number} choices={choices} onChange={onChange} value={value} />
    </div>
  );
};

export default StageFourteen;
