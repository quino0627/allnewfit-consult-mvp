import React, { useState } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import styled, { css } from 'styled-components';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { css as emotionCSS } from '@emotion/core';
import InnerBox from './InnerBox';
import palette from '../../lib/styles/palette';
import Button from '../common/Button';
import {
  urAgree,
  serverErrorAlert,
  successUpload,
  successUploadDescription,
  consultTimeDescription,
  depositDescription,
  sevenDaysCaution,
} from '../../lib/sentences';
import InformationUsageAgreement from './InformationUsageAgreement';
import { ReactComponent as Check } from '../../static/images/check.svg';
import InformationRefund from './InformationRefund';

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

const DepositBlock = styled.div`
  background: ${palette.cityLights};
  width: 80%;
  border-radius: 5px;
  padding: 5px 0;
  margin: 0 auto 10px;
  text-align: center;
  cursor: pointer;
`;

const Deposit = styled.div`
  font-weight: bold;
  font-size: 16px;
`;
const CopyDescirption = styled.div`
  font-size: 12px;
`;
const SevenDaysCaution = styled.div`
  font-size: 12px;
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

const SelectConsultTypeBlock = styled.div`
  width: 100%;
  height: 180px;
  padding: 10px 0;
  margin-bottom: 10px;
  display: flex;
`;

const ConsultType = styled.button`
  box-sizing: border-box;
  width: 50%;
  height: 100%;
  border: 3px solid ${palette.allnewfitBlue};
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.22);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${palette.allnewfitBlue};
  border-radius: 12px;
  cursor: pointer;
  &:first-child {
    margin: 0 5px 0 0;
  }
  &:hover {
    color: ${palette.default};
    background: ${palette.allnewfitBlue};
  }
  ${props =>
    props.selected === 'true' &&
    css`
      color: ${palette.default};
      background: ${palette.allnewfitBlue};
    `}
`;

const ConsultTypeTitle = styled.div`
  font-size: 16px;
  font-weight: bold;

  text-align: center;
  margin-bottom: 10px;
`;
const ConsultTypePrice = styled.div`
  font-size: 14px;
  margin-bottom: 20px;
`;
const ConsultDescription = styled.div`
  font-size: 12px;
  font-weight: 400;
`;

const ConsultSelect = React.memo(({ consultType, onChangeInputValue }) => {
  const handleChange = e => {
    onChangeInputValue({ field: 'consultType', value: e.target.getAttribute('value') });
  };
  return (
    <SelectConsultTypeBlock>
      <ConsultType
        value="TotalMove"
        onClick={handleChange}
        selected={(consultType === 'TotalMove').toString()}
      >
        <ConsultTypeTitle value="TotalMove">
          Total Move <br /> 디자인
        </ConsultTypeTitle>
        <ConsultTypePrice value="TotalMove">40,000원</ConsultTypePrice>
        <ConsultDescription value="TotalMove">
          나한테 꼭 필요한
          <br />
          핵심만 받아보기
        </ConsultDescription>
      </ConsultType>
      <ConsultType
        value="SevenDaysMove"
        onClick={handleChange}
        selected={(consultType === 'SevenDaysMove').toString()}
      >
        <ConsultTypeTitle value="SevenDaysMove">
          7 Days Move <br /> 디자인
        </ConsultTypeTitle>
        <ConsultTypePrice value="SevenDaysMove">170,000원</ConsultTypePrice>
        <ConsultDescription value="SevenDaysMove">일주일 운동 실천과</ConsultDescription>
        <ConsultDescription value="SevenDaysMove">
          올뉴핏 데일리 케어까지 받아보기
        </ConsultDescription>
      </ConsultType>
    </SelectConsultTypeBlock>
  );
});

const InputCheckoutData = ({
  name,
  nameError,
  email,
  emailError,
  phone,
  phoneError,
  consultType,
  consultTypeError,
  onChangeInputValue,
  onSubmit,
  loading,
  apply,
  applyError,
}) => {
  const [copied, setCopied] = useState(false);
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
            <HeaderSentence>
              {apply.name}님, {successUpload}
            </HeaderSentence>
            <Descriptionsentence>{successUploadDescription}</Descriptionsentence>
            <Descriptionsentence>{consultTimeDescription}</Descriptionsentence>
            {apply.consultType === 'SevenDaysMove' && (
              <Descriptionsentence>{sevenDaysCaution}</Descriptionsentence>
            )}
            <CopyToClipboard text={depositDescription} onCopy={() => setCopied(true)}>
              <DepositBlock>
                <Deposit>
                  {apply.consultType === 'SevenDaysMove'
                    ? '7 Days Move Design'
                    : 'Total Move Design'}{' '}
                  -{apply.consultType === 'SevenDaysMove' ? '170,000원' : '40,000원'}
                </Deposit>
                <Deposit>{depositDescription}</Deposit>
                <CopyDescirption>{!copied ? '클릭해서 복사' : '복사 완료!'}</CopyDescirption>
              </DepositBlock>
            </CopyToClipboard>
          </InnerBox>
        </section>
        <InformationRefund />
      </>
    );
  }
  return (
    <>
      <section>
        {loading && (
          <FullScreen>
            <BeatLoader
              css={override}
              sizeUnit="px"
              size={50}
              color={palette.watermelon}
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
          <InputDescriptionSentence necessory>희망 디자인 유형</InputDescriptionSentence>
          <ConsultSelect consultType={consultType} onChangeInputValue={onChangeInputValue} />
          <Button theme="checkoutSubmit" onClick={onSubmit}>
            신청하기
          </Button>
          <ErrorDescription>
            {nameError && nameError}
            {phoneError && phoneError}
            {consultTypeError && consultTypeError}
            {emailError && emailError}
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
