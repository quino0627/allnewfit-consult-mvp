import React from 'react';
import styled, { css } from 'styled-components';
import InnerBox from './InnerBox';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';

const HeaderSentence = styled.div`
  font-size: 24px;
  color: ${palette.allnewfitBlack};
  margin-bottom: 10px;
`;

const Descriptionsentence = styled.div`
  font-size: 18px;
  color: ${palette.allnewfitBlack};
  margin-top: 12px;
  margin-bottom: 12px;
`;

const InputDescriptionSentence = styled.div`
  display: inline-block;
  font-size: 12px;
  color: ${palette.grisaille};
  position: relative;
  margin-bottom: 2px;
  &:after {
    content: '선택';
    color: ${palette.peace};
    font-size: 8px;
    position: absolute;
    top: 0;
    right: -20px;
  }

  ${props =>
    props.necessory &&
    css`
      &:after {
        content: '*';
        color: ${palette.watermelon};
        position: absolute;
        top: 0;
        right: -5px;
      }
    `}
`;

const InputBlock = styled.input`
  position: relative;
  display: block;
  width: 100%;
  margin-bottom: 16px;
  border: none;
  height: 32px;
  font-size: 14px;
  background: transparent;
  border-radius: 0;
  border-bottom: 2px solid ${palette.allnewfitBlue};
  &:focus {
    outline: none;
  }
`;

const InputCheckoutData = ({ name, email, phone, onChangeInputValue }) => {
  const onChangeValue = e => {
    onChangeInputValue({ field: e.target.name, value: e.target.value });
  };
  return (
    <section>
      <InnerBox color="default">
        <Descriptionsentence>프로그램 신청 마지막 단계</Descriptionsentence>

        <InputDescriptionSentence necessory>이름</InputDescriptionSentence>
        <InputBlock type="text" onChange={onChangeValue} name="name" value={name} />

        <InputDescriptionSentence necessory>전화번호</InputDescriptionSentence>
        <InputBlock type="number" onChange={onChangeValue} name="phone" />

        <InputDescriptionSentence>이메일</InputDescriptionSentence>
        <InputBlock type="text" onChange={onChangeValue} name="emial" />

        <Button theme="checkoutSubmit">신청하기</Button>
      </InnerBox>
    </section>
  );
};

export default InputCheckoutData;
