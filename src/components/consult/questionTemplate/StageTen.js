import React from 'react';
import QuestionHeader from '../QuestionComponent/QuestionHeader';
import QuestionChoiceMultiple from '../QuestionComponent/QuestionChoiceMultiple';
import QuestionDescriptionBox from '../QuestionComponent/QuestionDescriptionBox';

const StageTen = ({ question, onChange }) => {
  const { type, title, number, choices, value, description } = question;

  return (
    <div>
      <QuestionHeader title={title} />
      {/* start는 긴 문장이 있을 경우 */}
      <QuestionChoiceMultiple
        choices={choices}
        number={number}
        value={value}
        onChange={onChange}
        all
      />
      {type === 'oneQuestionSelectManyWithDescription' && (
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

export default StageTen;
