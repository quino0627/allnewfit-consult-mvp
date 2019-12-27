import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';

const ProgressBarBlock = styled.div`
  width: 400px;
  height: 10px;
  background-color: ${palette.cityLights};
  border-radius: 5px;
`;

const InsideLine = styled.div`
  border-radius: 5px 3px 3px 5px;
  height: 100%;
  width: 8%;
  width: ${props => props.progress};
  background: rgb(0, 189, 78);
  background: linear-gradient(0deg, rgba(0, 189, 78, 1) 0%, rgba(169, 255, 196, 1) 100%);
  box-shadow: 1px 3px 7px #00000029;
`;

const ProgressBar = ({ stage, lastStage }) => {
  return (
    <ProgressBarBlock>
      <InsideLine progress={`${(Number(stage) / Number(lastStage)) * 100}%`} />
    </ProgressBarBlock>
  );
};

export default ProgressBar;
