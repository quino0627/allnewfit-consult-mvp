import React from 'react';
import styled from 'styled-components';
import InnerBox from './InnerBox';
import palette from '../../lib/styles/palette';

const HeaderSentence = styled.div`
  font-size: 24px;
  color: ${palette.default};
  margin-bottom: 10px;
`;

const Descriptionsentence = styled.div`
  font-size: 18px;
  color: ${palette.default};
  margin-bottom: 6px;
`;

const Introduction = () => {
  return (
    <section>
      <InnerBox color="clearChill">
        <HeaderSentence>
          맞춤 컨설팅을 위해 입력된 정보가
          <br />
          담당자에게 배정되었습니다.
        </HeaderSentence>
        <br />
        <br />
        <Descriptionsentence>운동 목적 : </Descriptionsentence>
        <Descriptionsentence>건강 목표 :</Descriptionsentence>
        <Descriptionsentence>일주일 2~3회, 피트니스 센터</Descriptionsentence>
        <br />
        <br />
        <Descriptionsentence>
          아래의 항목을 제출하시면 자세한 안내를 진행드립니다.
        </Descriptionsentence>
      </InnerBox>
    </section>
  );
};

export default Introduction;
