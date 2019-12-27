import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../lib/styles/palette';

const InputBoxBlock = styled.div`
  display: inline-flex;
  color: ${palette.clearChill};
  font-size: 24px;
  border-bottom: 3px solid ${palette.clearChill};
`;

const InputBlock = styled.input`
  color: ${palette.clearChill};
  background-color: transparent;
  border: none;
  width: 150px;
  ${props =>
    props.long === 'true' &&
    css`
      width: 300px;
    `}
  font-size: 24px;
  outline: none;
  &:focus {
    outline: none;
  }
`;

const QuestionInputBox = ({ unit = '', long, number, value, onChange, field }) => {
  return (
    <InputBoxBlock>
      <InputBlock
        type="text"
        long={long}
        value={value}
        onChange={e => onChange({ stage: number, field, value: e.target.value })}
      />
      <div>{unit}</div>
    </InputBoxBlock>
  );
};

export default QuestionInputBox;
