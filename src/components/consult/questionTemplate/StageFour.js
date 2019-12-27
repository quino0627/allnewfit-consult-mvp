import React from 'react';
import QuestionHeader from '../QuestionComponent/QuestionHeader';
import QuestionChoiceMultiple from '../QuestionComponent/QuestionChoiceMultiple';
import QuestionOtherInputBox from '../QuestionComponent/QuestionOtherInputBox';

const StageFour = ({ question, onChange }) => {
  const { type, title, number, choices, value, description } = question;
  return (
    <div>
      <QuestionHeader title={title} />
      <QuestionChoiceMultiple choices={choices} number={number} value={value} onChange={onChange} />
      {type === 'oneQuestionWithOther' && (
        <QuestionOtherInputBox
          number={number}
          onChange={onChange}
          value={value}
          description={description}
        />
      )}
    </div>
  );
};

export default StageFour;
