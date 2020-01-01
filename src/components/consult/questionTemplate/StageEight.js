import React from 'react';
import QuestionHeader from '../QuestionComponent/QuestionHeader';
import QuestionTextareaBox from '../QuestionComponent/QuestionTextareaBox';

const StageEight = ({ question, onChange }) => {
  const { title, number, choices, value } = question;
  return (
    <div>
      <QuestionHeader title={title} />
      <QuestionTextareaBox number={number} field="value" value={value} onChange={onChange} />
    </div>
  );
};

export default StageEight;
