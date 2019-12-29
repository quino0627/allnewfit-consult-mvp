import React from 'react';
import QuestionHeader from '../QuestionComponent/QuestionHeader';
import QuestionChoiceMultiple from '../QuestionComponent/QuestionChoiceMultiple';
import QuestionInputBox from '../QuestionComponent/QuestionInputBox';
import QuestionDescriptionBox from '../QuestionComponent/QuestionDescriptionBox';

const StageFifteen = ({ question, onChange }) => {
  const { type, title, number, choices, value, description } = question;
  return (
    <div>
      <QuestionHeader title={title} />
      <QuestionChoiceMultiple choices={choices} number={number} value={value} onChange={onChange} />
      {type === 'oneQuestionWithDescription' && (
        <QuestionDescriptionBox
          number={number}
          onChange={onChange}
          value={value}
          description={description}
        />
      )}
    </div>
  );
};

export default StageFifteen;