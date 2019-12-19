import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const LeftBoxBlock = styled.div`
  width: 250px;
  background-color: ${palette.clearChill};
  padding: 50px 10px;
`;
const Subscription = styled.div`
  margin: 0 10px;
  position: relative;
  font-size: 16px;
  font-weight: 300;
  color: ${palette.cityLights};
`;

const LeftBox = () => {
  return (
    <LeftBoxBlock>
      <Subscription>
        맞춤 프로그램 생성을 위해 <br />
        회원님의 목표와 생활습관을
        <br /> 알려주세요.
      </Subscription>
    </LeftBoxBlock>
  );
};

export default LeftBox;
