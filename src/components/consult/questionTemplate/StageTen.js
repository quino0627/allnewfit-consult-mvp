import React from 'react';
import QuestionHeader from '../QuestionComponent/QuestionHeader';
import QuestionInputBox from '../QuestionComponent/QuestionInputBox';

const StageTen = ({ question, onChange }) => {
  const { type, title1, title2, number, value1, value2 } = question;

  return (
    <div>
      <QuestionHeader title={title1} />
      <QuestionInputBox
        unit="kg"
        number={number}
        field="value1"
        value={value1}
        onChange={onChange}
      />
      <QuestionHeader title={title2} />
      <QuestionInputBox
        unit="cm"
        number={number}
        field="value2"
        value={value2}
        onChange={onChange}
      />
    </div>
  );
};

export default StageTen;
