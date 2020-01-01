import React from 'react';
import QuestionHeader from '../QuestionComponent/QuestionHeader';
import QuestionChoiceMultiple from '../QuestionComponent/QuestionChoiceMultiple';
import QuestionDescriptionBox from '../QuestionComponent/QuestionDescriptionBox';

const StageThirteen = ({ question, onChange, onChangeArray }) => {
  const { type, title, number, choices, value, description } = question;
  return (
    <div>
      <QuestionHeader title={title} />
      <QuestionChoiceMultiple
        choices={choices}
        number={number}
        value={value}
        onChange={onChange}
        onChangeArray={onChangeArray}
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

export default StageThirteen;
