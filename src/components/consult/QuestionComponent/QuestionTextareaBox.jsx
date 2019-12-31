import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../lib/styles/palette';
import { textareaPlaceholder } from '../../../lib/sentences';

const InputBoxBlock = styled.div`
  display: inline-flex;
  width: 90%;
  color: ${palette.clearChill};
  font-size: 24px;
`;

const InputBlock = styled.textarea`
  color: ${palette.clearChill};
  background-color: transparent;
  width: 100%;
  font-size: 18px;
  outline: none;
  &:focus {
    outline: none;
  }
`;

//
const QuestionTextareaBox = ({ number, onChange, value, description, long, placeholder }) => {
  return (
    <InputBoxBlock>
      <InputBlock
        type="text"
        long={long}
        placeholder={placeholder || textareaPlaceholder}
        value={description}
        onChange={e => onChange({ stage: number, field: 'value', value: e.target.value })}
      />
    </InputBoxBlock>
  );
};

export default QuestionTextareaBox;
