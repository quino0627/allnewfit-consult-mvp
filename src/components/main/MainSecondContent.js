import React from 'react';
import styled, { css } from 'styled-components';
import BilateralPadding from '../common/BilateralPadding';

const MainContentBlock = styled.div`
  color: #2f3542;
  margin-top: 10vh;
  padding-top: 40px 0;
  /* background: blue; */
  box-sizing: border-box;
  width: 100vw;
  position: relative;
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

const MainSubWord = styled.div`
  font-size: 18px;
  font-weight: 300;
  line-height: 1.2em;
  margin-top: 14px;
`;

const MainImg = styled.img`
  width: 500px;
  height: auto;
`;

const MainSecondContent = () => {
  return (
    <MainContentBlock>
      <BilateralPadding>
        <MainBigWord>
          올뉴핏이 야심차게 준비한 <div />
          프리미엄 디자인🔥
        </MainBigWord>
        <MainImg src={`${window.location.origin}/images/introimg.jpg`} />
      </BilateralPadding>
    </MainContentBlock>
  );
};

export default MainSecondContent;
