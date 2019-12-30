/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../../lib/styles/palette';
import variable from '../../../lib/styles/variable';

const ButtonsBlock = styled.div`
  &:after {
    content: '';
    display: table;
    clear: both;
  }
`;

const Column = styled.div`
  float: left;
  width: 50%;
`;
const Buttons = ({ length, children }) => {
  // if (length > 8) {
  //   return (
  //     <ButtonsBlock>
  //       <Column>{children}</Column>
  //       <Column>zxcv</Column>
  //     </ButtonsBlock>
  //   );
  // }
  return <div>{children}</div>;
};

const ButtonBlock = styled.div`
  width: 90%;
  min-height: ${props => props.size || '40px'};
  border: 0.5px solid ${palette.clearChill};
  border-radius: 10px;

  margin: ${props => props.margin || '20px auto 20px 0'};

  display: flex;
  justify-content: center;

  align-items: center;

  font-size: ${props => props.font || '24px'};
  font-weight: 400;
  color: ${palette.clearChill};
  cursor: pointer;
  &:hover,
  &:focus {
    background: ${palette.clearChill};
    color: ${palette.default};
  }
  ${props =>
    props.checked === 'true' &&
    css`
      background: ${palette.clearChill};
      color: ${palette.default};
    `}
  ${props =>
    props.start === 'true' &&
    css`
      justify-content: flex-start !important;
      padding-left: 10px;
      font-size: ${variable.longFont};
    `}
`;

const Button = ({ choice, size, font, margin, start, onChange, stage, field, value, ...rest }) => {
  return (
    <ButtonBlock
      size={size}
      font={font}
      start={start}
      margin={margin}
      onClick={() => onChange({ stage, field, value })}
      value={value}
      stage={stage}
      field={field}
      {...rest}
    >
      {choice}
    </ButtonBlock>
  );
};

/** choices를 배열으로 받는다.
 * ex: choices=["예", "아닙니다."] */

const QuestionChoiceMultiple = ({
  choices,
  number,
  value,
  onChange,
  onChangeArray,
  start,
  all,
}) => {
  return (
    <Buttons>
      {choices.map((choice, index) => {
        return (
          <Button
            size={variable[`height${choices.length}`]}
            font={variable[`font${choices.length}`]}
            margin={variable[`margin${choices.length}`]}
            choice={choice}
            key={index}
            start={start}
            stage={number}
            field="value"
            value={choice}
            checked={all ? value.includes(choice).toString() : (value === choice).toString()}
            onChange={all ? onChangeArray : onChange}
          />
        );
      })}
    </Buttons>
  );
};

export default QuestionChoiceMultiple;
