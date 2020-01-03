import React from 'react';
import styled from 'styled-components';
import InnerBox from './InnerBox';
import palette from '../../lib/styles/palette';

const UpperPadding = styled.div`
  padding-top: 50px;
`;
const HeaderSentence = styled.div`
  font-size: 24px;
  color: ${palette.allnewfitBlack};
  margin: 0 auto;
  margin-bottom: 10px;
  text-align: center;
`;

const Descriptionsentence = styled.div`
  font-size: 18px;
  color: ${palette.allnewfitBlack};
  margin-top: 12px;
  margin-bottom: 12px;
`;

const ServiceProgress = () => {
  return (
    <InnerBox>
      <UpperPadding />
      <HeaderSentence>운동/건강 디자인에 대해 더 알아보기</HeaderSentence>
    </InnerBox>
  );
};

export default ServiceProgress;
