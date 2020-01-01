import React from 'react';
import QuestionHeader from '../QuestionComponent/QuestionHeader';
import QuestionChoiceMultiple from '../QuestionComponent/QuestionChoiceMultiple';

const StageTen = ({ question, onChange }) => {
  const { title, number, choices, value } = question;
  return (
    <div>
      <QuestionHeader title={title} />
      <QuestionChoiceMultiple choices={choices} number={number} value={value} onChange={onChange} />
    </div>
  );
};

export default StageTen;
