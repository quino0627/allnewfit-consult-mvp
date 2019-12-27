import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../lib/styles/palette';

const InputBoxBlock = styled.div`
  display: inline-flex;
  width: 90%;
  color: ${palette.clearChill};
  font-size: 24px;

  ${props =>
    props.show !== 'true' &&
    css`
      display: none;
    `}
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
const QuestionDescriptionBox = ({ number, onChange, value, description, long }) => {
  return (
    <InputBoxBlock show={(value !== null).toString()}>
      <InputBlock
        type="text"
        long={long}
        placeholder="더 상세하게 적어주시면 상황에 더 맞는 피드백이 됩니다 :)"
        value={description}
        onChange={e => onChange({ stage: number, field: 'description', value: e.target.value })}
      />
    </InputBoxBlock>
  );
};

export default QuestionDescriptionBox;
