import React from 'react';
import styled from 'styled-components';
import queryString from 'query-string';
import { withRouter } from 'react-router-dom';
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

const ButtonsBlock = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row-reverse;
`;

const buildLink = ({ stage = 1 }) => {
  // const query = queryString.stringify({ stage });
  console.log(stage);
  return `?s=${stage}`;
};

const Buttons = ({ stage, lastStage = 15 }) => {
  return (
    <ButtonsBlock>
      <Button
        theme="goToNext"
        hide={(parseInt(stage, 10) === lastStage).toString()}
        to={stage === lastStage ? undefined : buildLink({ stage: parseInt(stage, 10) + 1 })}
      >
        다음
      </Button>
      <Button
        theme="goToPrev"
        hide={(parseInt(stage, 10) === 1).toString()}
        to={stage === lastStage ? undefined : buildLink({ stage: parseInt(stage, 10) - 1 })}
      >
        이전
      </Button>
    </ButtonsBlock>
  );
};

const MainBox = ({ location }) => {
  const { s } = queryString.parse(location.search);
  return (
    <MainBoxBlock>
      <ProgressBar stage={s} />
      <Question />
      <Buttons stage={s} />
    </MainBoxBlock>
  );
};

export default withRouter(MainBox);
