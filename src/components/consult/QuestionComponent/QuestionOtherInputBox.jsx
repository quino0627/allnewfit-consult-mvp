import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../lib/styles/palette';
import { textareaPlaceholder } from '../../../lib/sentences';

const InputBoxBlock = styled.div`
  display: inline-flex;
  width: 90%;
  color: ${palette.allnewfitBlue};
  font-size: 24px;

  ${props =>
    props.show !== 'true' &&
    css`
      display: none;
    `}
`;

const InputBlock = styled.textarea`
  color: ${palette.allnewfitBlue};
  background-color: transparent;
  width: 100%;
  font-size: 18px;
  outline: none;
  &:focus {
    outline: none;
  }
`;

//
const QuestionOtherInputBox = ({ number, onChange, value, description, long }) => {
  return (
    <InputBoxBlock show={(value === '기타' || value === '해당사항 없음').toString()}>
      <InputBlock
        type="text"
        long={long}
        placeholder={textareaPlaceholder}
        value={description}
        onChange={e => onChange({ stage: number, field: 'description', value: e.target.value })}
      />
    </InputBoxBlock>
  );
};

export default QuestionOtherInputBox;
