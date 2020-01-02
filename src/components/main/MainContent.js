import React from 'react';
import styled, { css } from 'styled-components';
import BilateralPadding from '../common/BilateralPadding';
import Button from '../common/Button';

const MainContentBlock = styled.div`
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
const CustomButton = styled.a`
  width: 200px;
  height: 56px;
  border-radius: 5px;
  background-color: #3742fa;
  color: #ced6e0;
  font-weight: 500;
  font-size: 16px;
  padding: 0 24px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

const MainContent = () => {
  return (
    <MainContentBlock>
      <BilateralPadding>
        <MainBigWord>
          관리의 가치를 아는 당신 <div />
          변화를 위한 첫 걸음
        </MainBigWord>
        <MainSubWord>운동도, 관리도 내 몸에 맞게</MainSubWord>
        <CustomButton theme="goToForm" href="/consult?s=1">
          운동/건강 디자인 알아보기
        </CustomButton>
      </BilateralPadding>
    </MainContentBlock>
  );
};

export default MainContent;
