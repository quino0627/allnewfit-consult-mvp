import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Introduction from '../../components/checkout/Introduction';

const IntroductionContainer = () => {
  const dispatch = useDispatch();
  const { questions } = useSelector(({ question }) => ({
    questions: question.questions,
  }));

  const purpose = questions.six.value;
  const secondaryPurpose = questions.seven.value;
  const times = questions.three.value;
  const where = questions.four.value;

  return (
    <Introduction
      purpose={purpose}
      secondaryPurpose={secondaryPurpose}
      times={times}
      where={where}
    />
  );
};

export default IntroductionContainer;
