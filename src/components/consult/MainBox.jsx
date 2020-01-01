import React from 'react';
import styled from 'styled-components';
import queryString from 'query-string';
import { withRouter, Redirect } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import ProgressBar from './ProgressBar';
// import Question from './Question';
import Button from '../common/Button';
import { matchNumToString, isNullOrEmpty } from '../../lib/library';
import Question from './Question';

const MainBoxBlock = styled.div`
  @media (min-width: 961px) {
    /* 650px */
    width: 550px;
    background-color: ${palette.default};
    margin: 0 20px 0 50px;
    padding: 50px 10px 50px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  @media (max-width: 960px) {
    padding: 50px 20px;
    height: 75vh;
  }
`;

const ButtonsBlock = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row-reverse;
  @media (min-width: 961px) {
  }
  @media (max-width: 960px) {
    justify-content: center;
  }
`;

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
  const lastStage = Number(17);
  if (Number(s) > lastStage) {
    return <Redirect to="/consult?s=1" />;
  }
  return (
    <MainBoxBlock>
      <ProgressBar stage={s} lastStage={lastStage} />
      <Question stage={s} questions={questions} onChange={onChange} onChangeArray={onChangeArray} />
      {/* {JSON.stringify(questions)} */}
      <Buttons stage={s} questions={questions} lastStage={lastStage} />
    </MainBoxBlock>
  );
};

export default withRouter(MainBox);
