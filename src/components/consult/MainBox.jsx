import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import ProgressBar from './ProgressBar';
import Question from './Question';
import Button from '../common/Button';

const MainBoxBlock = styled.div`
  /* 650px */
  width: 550px;
  background-color: ${palette.default};
  margin: 0 20px 0 50px;
  padding: 50px 10px 50px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Buttons = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row-reverse;
`;

const MainBox = () => {
  return (
    <MainBoxBlock>
      <ProgressBar />
      <Question />
      <Buttons>
        <Button theme="goToNext">asdf</Button>
        <Button theme="goToNext">asdf</Button>
      </Buttons>
    </MainBoxBlock>
  );
};

export default MainBox;
