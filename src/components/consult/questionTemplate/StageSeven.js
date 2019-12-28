import React from 'react';
import QuestionHeader from '../QuestionComponent/QuestionHeader';
import QuestionChoiceMultiple from '../QuestionComponent/QuestionChoiceMultiple';
import QuestionInputBox from '../QuestionComponent/QuestionInputBox';
import QuestionTextareaBox from '../QuestionComponent/QuestionTextareaBox';

const StageSeven = ({ question, onChange }) => {
  const { title, number, choices, value } = question;
  return (
    <div>
      <QuestionHeader title={title} />
      <QuestionTextareaBox number={number} field="value" value={value} onChange={onChange} />
    </div>
  );
};

export default StageSeven;
