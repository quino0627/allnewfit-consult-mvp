/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import palette from '../../../lib/styles/palette';

const ButtonsBlock = styled.div``;
const ButtonBlock = styled.div`
  width: 80%;
  height: 65px;

  border: 0.5px solid ${palette.clearChill};
  border-radius: 10px;

  margin: 30px 0;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 24px;
  font-weight: 400;
  color: ${palette.clearChill};
  cursor: pointer;
`;

const Button = ({ choice }) => {
  return <ButtonBlock>{choice}</ButtonBlock>;
};

// choices를 배열으로 받는다.
const QuestionChoiceMultiple = ({ choices }) => {
  return (
    <ButtonsBlock>
      {choices.map((choice, index) => {
        return <Button choice={choice} key={`button-${index}`} />;
      })}
    </ButtonsBlock>
  );
};

export default QuestionChoiceMultiple;
