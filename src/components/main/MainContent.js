import React from 'react';
import styled, { css } from 'styled-components';
import BilateralPadding from '../common/BilateralPadding';
import Button from '../common/Button';

const MainContentBlock = styled.div`
  margin-top: 80px;
  /* background: blue; */
  box-sizing: border-box;
  height: calc(100vh - 80px);
  /* height: calc(100vmax - 80px); */
  width: 100vw;
  position: relative;
  /* overflow: hidden; */

  ${() =>
    global.isMobile &&
    css`
      height: calc(100vmax - 80px);
    `}

  &::before {
    content: '';
    position: absolute;
    width: 100vw;
    height: calc(100vh - 80px);
    ${() =>
      global.isMobile &&
      css`
        height: calc(100vmax - 80px);
      `}
    top: 0;
    left: 0;
    z-index: -1;
    background-image: url(${window.location.origin + '/images/background.jpg'});
    transform: scaleX(-1); /* Flip Image */
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    overflow: hidden;
    overflow-y: hidden;
  }
`;

const MainBigWord = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: #ced6e0;
  line-height: 1.5em;
  padding-top: 20vh;
  ${() =>
    global.isMobile &&
    css`
      padding-top: 130px;
    `}
`;

const MainSubWord = styled.div`
  font-size: 18px;
  font-weight: 300;
  color: #ced6e0;
  line-height: 1.2em;
  margin-top: 14px;
`;

const MainContent = () => {
  return (
    <MainContentBlock>
      <BilateralPadding>
        <MainBigWord>
          체중계 숫자보다 <div />
          중요한 가치를 <div /> 아는 당신에게
        </MainBigWord>
        <MainSubWord>
          건강관리를 위해 도전과 실패를 반복하셨나요?
          <div />
          작은 변화로 오래가는 습관을 만드세요.
        </MainSubWord>
        <Button theme="goToForm">건강 컨설팅 만나보기</Button>
      </BilateralPadding>
    </MainContentBlock>
  );
};

export default MainContent;
