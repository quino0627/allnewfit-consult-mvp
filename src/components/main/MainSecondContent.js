import React from 'react';
import styled, { css } from 'styled-components';
import BilateralPadding from '../common/BilateralPadding';
import { mainSecondContainerTitle, mainApplyButtonText } from '../../lib/sentences';
import Button from '../common/Button';

const MainContentBlock = styled.div`
  color: #2f3542;
  padding: 40px 20% 0;
  /* background: blue; */
  box-sizing: border-box;
  width: 100vw;
  position: relative;
  ${() =>
    global.isMobile &&
    css`
      padding: 40px 0 0 0 !important;
    `}
`;

const MainBigWord = styled.div`
  font-size: 40px;
  font-weight: bold;
  line-height: 1.5em;
  /* ${() =>
    global.isMobile &&
    css`
      margin-top: 150px;
    `} */
`;

// const MainSubWord = styled.div`
//   font-size: 18px;
//   font-weight: 300;
//   line-height: 1.2em;
//   margin-top: 14px;
// `;

const MainImg = styled.img`
  /* max-width: 500px; */
  width: 100%;
  height: auto;
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
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`;

const MainSecondContent = () => {
  return (
    <MainContentBlock>
      {/* <MainBigWord>{mainSecondContainerTitle}</MainBigWord> */}
      <MainImg src={`${window.location.origin}/images/intro1.png`} />
      <MainImg src={`${window.location.origin}/images/intro2.png`} />
      <MainImg src={`${window.location.origin}/images/intro3.png`} />
      <MainImg src={`${window.location.origin}/images/intro4.png`} />
      <MainImg src={`${window.location.origin}/images/intro5.png`} />
      <MainImg src={`${window.location.origin}/images/intro6.png`} />
      <MainImg src={`${window.location.origin}/images/intro7.png`} />
      <MainImg src={`${window.location.origin}/images/intro8.png`} />
      <CustomButton theme="goToForm" href="/consult?s=1">
        {mainApplyButtonText}
      </CustomButton>
    </MainContentBlock>
  );
};

export default MainSecondContent;
