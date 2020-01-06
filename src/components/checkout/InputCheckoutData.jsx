import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import styled, { css } from 'styled-components';
import { css as emotionCSS } from '@emotion/core';
import InnerBox from './InnerBox';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import { urAgree, serverErrorAlert } from '../../lib/sentences';
import InformationUsageAgreement from './InformationUsageAgreement';
import { ReactComponent as Check } from '../../static/images/check.svg';

const override = emotionCSS`
    display: block;
    margin: 0 auto;
    border-color: ${palette.watermelon};
    text-align:center;
`;

const FullScreen = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00000089;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderSentence = styled.div`
  font-size: 20px;
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

const ErrorDescription = styled.div`
  color: ${palette.watermelon};
  font-size: 12px;
`;
const AgreeDescription = styled.div`
  color: ${palette.peace};
`;

const CenterDescription = styled.div`
  margin: 30px auto;
  text-align: center;
`;

const InputCheckoutData = ({
  name,
  nameError,
  email,
  phone,
  phoneError,
  onChangeInputValue,
  onSubmit,
  loading,
  apply,
  applyError,
}) => {
  const onChangeValue = e => {
    onChangeInputValue({ field: e.target.name, value: e.target.value });
  };
  if (!loading && apply) {
    return (
      <>
        <section>
          <InnerBox color="default">
            <CenterDescription>
              <Check />
            </CenterDescription>
            <HeaderSentence>{apply.name}님, 운동 정보가 성공적으로 제출되었습니다.</HeaderSentence>
          </InnerBox>
        </section>
        <InformationUsageAgreement />
      </>
    );
  }
  return (
    <>
      <section>
        {loading && (
          <FullScreen>
            <ClipLoader
              css={override}
              sizeUnit="px"
              size={50}
              color={palette.allnewfitBlue}
              loading={loading}
            />
          </FullScreen>
        )}
        <InnerBox color="default">
          <Descriptionsentence>프로그램 신청 마지막 단계</Descriptionsentence>
          <InputDescriptionSentence necessory>이름</InputDescriptionSentence>
          <InputBlock type="text" onChange={onChangeValue} name="name" value={name} />
          <InputDescriptionSentence necessory>전화번호</InputDescriptionSentence>
          <InputBlock type="text" onChange={onChangeValue} name="phone" value={phone} />
          <InputDescriptionSentence>이메일</InputDescriptionSentence>
          <InputBlock type="text" onChange={onChangeValue} name="email" value={email} />
          <Button theme="checkoutSubmit" onClick={onSubmit}>
            신청하기
          </Button>
          <ErrorDescription>
            {nameError && nameError}
            {phoneError && phoneError}
          </ErrorDescription>
          <AgreeDescription>{urAgree}</AgreeDescription>

          {!loading && applyError && <div>{serverErrorAlert}</div>}
        </InnerBox>
      </section>
      <InformationUsageAgreement />
    </>
  );
};

export default InputCheckoutData;
