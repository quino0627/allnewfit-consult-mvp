import React from 'react';
import QuestionHeader from '../QuestionComponent/QuestionHeader';
import QuestionInputBox from '../QuestionComponent/QuestionInputBox';

const StageSixteen = ({ question, onChange }) => {
  const { title, number, choices, value } = question;
  return (
    <div>
      <QuestionHeader title={title} />
      <QuestionInputBox unit="" number={number} field="value" value={value} onChange={onChange} />
    </div>
  );
};

export default StageSixteen;
