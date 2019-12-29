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
import StageFifteen from './questionTemplate/StageFifteen';
import { matchNumToString, isNullOrEmpty } from '../../lib/library';
import StageSixteen from './questionTemplate/StageSixteen';

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
const Question = ({ stage, questions, onChange, onChangeArray }) => {
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
        return (
          <StageTen question={questions.ten} onChange={onChange} onChangeArray={onChangeArray} />
        );
      case 11:
        return (
          <StageEleven
            question={questions.eleven}
            onChange={onChange}
            onChangeArray={onChangeArray}
          />
        );
      case 12:
        return (
          <StageTwelve
            question={questions.twelve}
            onChange={onChange}
            onChangeArray={onChangeArray}
          />
        );
      case 13:
        return <StageThirteen question={questions.thirteen} onChange={onChange} />;
      case 14:
        return <StageFourteen question={questions.fourteen} onChange={onChange} />;
      case 15:
        return <StageFifteen question={questions.fifteen} onChange={onChange} />;
      case 16:
        return <StageSixteen question={questions.sixteen} onChange={onChange} />;
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

const Buttons = ({ stage, lastStage, questions }) => {
  const checkIsDisable = () => {
    const value1 = questions[matchNumToString(Number(stage))].value;
    const value2 = questions[matchNumToString(Number(stage))].value1;
    const value3 = questions[matchNumToString(Number(stage))].value2;

    if (Number(stage) === Number(1)) {
      return false;
    }
    // value1과  value2, value3는 함께 쓰이지 않음
    if (value2 === undefined && value3 === undefined) {
      // 만약 value만 쓰인다면, value가 null or empty인지 확인한다.
      if (isNullOrEmpty(value1)) {
        // null or empty라면 return true
        return true;
      }
      // 그렇지 않다면 return false
      return false;
    }
    // value가 쓰이지 않는다면 value1과 value2에 대해서 null or empty 검사
    if (isNullOrEmpty(value2) || isNullOrEmpty(value3)) {
      return true;
    }

    return false;
    // if(isNullOrEmpty(value1) || isNullOrEmpty(value2) || isNullOrEmpty(value3))
  };
  return (
    <ButtonsBlock>
      {Number(stage) && (
        <>
          <Button
            theme="goToNext"
            hide={(stage === undefined).toString()}
            disabled={checkIsDisable()}
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
            hide={(parseInt(stage, 10) === 1).toString()}
            to={buildLink({ stage: parseInt(stage, 10) - 1 })}
          >
            이전
          </Button>
        </>
      )}
    </ButtonsBlock>
  );
};

const MainBox = ({ location, questions, onChange, onChangeArray }) => {
  const { s } = queryString.parse(location.search);
  return (
    <MainBoxBlock>
      <ProgressBar stage={s} lastStage={Number(16)} />
      <Question stage={s} questions={questions} onChange={onChange} onChangeArray={onChangeArray} />
      {/* {JSON.stringify(questions)} */}
      <Buttons stage={s} questions={questions} lastStage={Number(16)} />
    </MainBoxBlock>
  );
};

export default withRouter(MainBox);
