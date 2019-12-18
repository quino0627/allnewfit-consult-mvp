import React from 'react';
import styled, { css } from 'styled-components';
import BilateralPadding from '../common/BilateralPadding';

const MainContentBlock = styled.div`
  color: #ced6e0;
  margin-top: 10vh;
  padding-top: 40px;
  /* background: blue; */
  box-sizing: border-box;
  height: 140px;
  width: 100vw;
  position: relative;
  background-color: #57606f;
`;

const MainBigWord = styled.div`
  font-size: 14px;

  /* ${() =>
    global.isMobile &&
    css`
      margin-top: 150px;
    `} */
`;

const Footer = () => {
  return (
    <MainContentBlock>
      <BilateralPadding>
        <MainBigWord>올뉴핏 사업자번호 01084897220</MainBigWord>
      </BilateralPadding>
    </MainContentBlock>
  );
};

export default Footer;
