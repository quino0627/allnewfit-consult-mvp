import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const LeftBoxBlock = styled.div`
  background-color: ${palette.clearChill};
  @media (min-width: 961px) {
    width: 250px;
    padding: 50px 10px;
  }
  @media (max-width: 960px) {
    width: 100%;
    height: 25vh;
    padding-top: 10px;
  }
`;
const Subscription = styled.div`
  font-size: 16px;
  font-weight: 300;
  color: ${palette.cityLights};
  @media (max-width: 961px) {
    margin: 0 10px;
    position: relative;
  }
  @media (max-width: 960px) {
    text-align: center;
  }
`;
const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${palette.cityLights};
  text-align: center;
`;

const LeftBox = () => {
  return (
    <LeftBoxBlock>
      <Logo>ALLNEWFIT</Logo>
      <Subscription>
        맞춤 프로그램 생성을 위해 <br />
        회원님의 목표와 생활습관을
        <br /> 알려주세요.
      </Subscription>
    </LeftBoxBlock>
  );
};

export default LeftBox;
