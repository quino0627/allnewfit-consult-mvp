import React from 'react';
import styled from 'styled-components';
import queryString from 'query-string';
import { withRouter } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import ProgressBar from './ProgressBar';
// import Question from './Question';
import Button from '../common/Button';
import {
  StageOne,
  StageTwo,
  StageThree,
  StageFour,
  StageFive,
  StageSix,
  StageSeven,
  StageEight,
  StageNine,
  StageTen,
  StageEleven,
  StageTwelve,
  StageThirteen,
  StageFourteen,
  StageAfterLoading,
} from './questionTemplate';

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

const QuestionBlock = styled.div`
  /* margin-top: 30px; */
`;
const Question = ({ stage, questions, onChange }) => {
  const renderSwitch = () => {
    console.log(Number(stage));
    switch (Number(stage)) {
      case 1:
        return <StageOne question={questions.one} onChange={onChange} />;
      case 2:
        return <StageTwo question={questions.two} onChange={onChange} />;
      case 3:
        return <StageThree question={questions.three} onChange={onChange} />;
      case 4:
        return <StageFour question={questions.four} onChange={onChange} />;
      case 5:
        return <StageFive question={questions.five} onChange={onChange} />;
      case 6:
        return <StageSix question={questions.six} onChange={onChange} />;
      case 7:
        return <StageSeven question={questions.seven} onChange={onChange} />;
      case 8:
        return <StageEight question={questions.eight} onChange={onChange} />;
      case 9:
        return <StageNine question={questions.nine} onChange={onChange} />;
      case 10:
        return <StageTen question={questions.ten} onChange={onChange} />;
      case 11:
        return <StageEleven question={questions.eleven} onChange={onChange} />;
      case 12:
        return <StageTwelve question={questions.twelve} onChange={onChange} />;
      case 13:
        return <StageThirteen question={questions.thirteen} onChange={onChange} />;
      case 14:
        return <StageFourteen question={questions.fourteen} onChange={onChange} />;
      case 15:
        return <StageAfterLoading />;
      default:
        return <div>기본 페이지</div>;
    }
  };

  return <QuestionBlock>{renderSwitch()}</QuestionBlock>;
};

const buildLink = ({ stage = 1 }) => {
  // const query = queryString.stringify({ stage });
  return `?s=${stage}`;
};

const Buttons = ({ stage, lastStage }) => {
  return (
    <ButtonsBlock>
      <Button
        theme="goToNext"
        hide={(stage === undefined).toString()}
        to={
          Number(stage) === lastStage
            ? `/consult/loading`
            : buildLink({ stage: parseInt(stage, 10) + 1 })
        }
      >
        다음
      </Button>
      <Button
        theme="goToPrev"
        hide={(parseInt(stage, 10) === 1 || stage === undefined).toString()}
        to={stage === lastStage ? undefined : buildLink({ stage: parseInt(stage, 10) - 1 })}
      >
        이전
      </Button>
    </ButtonsBlock>
  );
};

const MainBox = ({ location, questions, onChange }) => {
  const { s } = queryString.parse(location.search);
  return (
    <MainBoxBlock>
      <ProgressBar stage={s} lastStage={Number(14)} />
      <Question stage={s} questions={questions} onChange={onChange} />
      {/* {JSON.stringify(questions)} */}
      <Buttons stage={s} lastStage={Number(14)} />
    </MainBoxBlock>
  );
};

export default withRouter(MainBox);
