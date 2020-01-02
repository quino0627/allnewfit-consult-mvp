import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import { leftBoxSentence } from '../../lib/sentences';

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
  text-align: center;
  @media (max-width: 961px) {
    margin: 0 10px;
    position: relative;
  }
  @media (max-width: 960px) {
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
      <Subscription>{leftBoxSentence}</Subscription>
    </LeftBoxBlock>
  );
};

export default LeftBox;
