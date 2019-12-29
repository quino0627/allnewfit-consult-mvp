import React from 'react';
import styled from 'styled-components';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import palette from '../../lib/styles/palette';

const ProgressBarBlock = styled.div`
  width: 300px;
  margin: 0 auto;
`;
const TextBlock = styled.div`
  font-size: 24px;
  color: ${palette['clearChill']};
  text-align: center;
  margin-bottom: 50px;
`;
const CircularBlock = styled.div`
  width: 300px;
  height: 300px;
  margin: 0 auto;
`;
const ProgressBar = ({ percent }) => {
  return (
    <ProgressBarBlock>
      <TextBlock>
        몸에 맞는 운동을<br></br> 찾기 위한 여정
      </TextBlock>
      <CircularBlock>
        <CircularProgressbar value={percent} text={`${percent}%`} />;
      </CircularBlock>
    </ProgressBarBlock>
  );
};

export default ProgressBar;
