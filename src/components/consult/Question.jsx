import React from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
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
  StageFifteen,
  StageSixteen,
  StageSeventeen,
} from './questionTemplate';
import { matchNumToString } from '../../lib/library';

const QuestionBlock = styled.div`
  /* margin-top: 30px; */
`;

const Question = ({ stage, questions, onChange, onChangeArray }) => {
  const renderSwitch = () => {
    switch (Number(stage)) {
      case 1:
        return (
          <StageOne
            question={questions[matchNumToString(Number(stage))]}
            onChange={onChange}
            onChangeArray={onChangeArray}
          />
        );
      case 2:
        return (
          <StageTwo
            question={questions[matchNumToString(Number(stage))]}
            onChange={onChange}
            onChangeArray={onChangeArray}
          />
        );
      case 3:
        return (
          <StageThree
            question={questions[matchNumToString(Number(stage))]}
            onChange={onChange}
            onChangeArray={onChangeArray}
          />
        );
      case 4:
        return (
          <StageFour
            question={questions[matchNumToString(Number(stage))]}
            onChange={onChange}
            onChangeArray={onChangeArray}
          />
        );
      case 5:
        return (
          <StageFive
            question={questions[matchNumToString(Number(stage))]}
            onChange={onChange}
            onChangeArray={onChangeArray}
          />
        );
      case 6:
        return (
          <StageSix
            question={questions[matchNumToString(Number(stage))]}
            onChange={onChange}
            onChangeArray={onChangeArray}
          />
        );
      case 7:
        return (
          <StageSeven
            question={questions[matchNumToString(Number(stage))]}
            onChange={onChange}
            onChangeArray={onChangeArray}
          />
        );
      case 8:
        return (
          <StageEight
            question={questions[matchNumToString(Number(stage))]}
            onChange={onChange}
            onChangeArray={onChangeArray}
          />
        );
      case 9:
        return (
          <StageNine
            question={questions[matchNumToString(Number(stage))]}
            onChange={onChange}
            onChangeArray={onChangeArray}
          />
        );
      case 10:
        return (
          <StageTen
            question={questions[matchNumToString(Number(stage))]}
            onChange={onChange}
            onChangeArray={onChangeArray}
          />
        );
      case 11:
        return (
          <StageEleven
            question={questions[matchNumToString(Number(stage))]}
            onChange={onChange}
            onChangeArray={onChangeArray}
          />
        );
      case 12:
        return (
          <StageTwelve
            question={questions[matchNumToString(Number(stage))]}
            onChange={onChange}
            onChangeArray={onChangeArray}
          />
        );
      case 13:
        return (
          <StageThirteen
            question={questions[matchNumToString(Number(stage))]}
            onChange={onChange}
            onChangeArray={onChangeArray}
          />
        );
      case 14:
        return (
          <StageFourteen
            question={questions[matchNumToString(Number(stage))]}
            onChange={onChange}
            onChangeArray={onChangeArray}
          />
        );
      case 15:
        return (
          <StageFifteen
            question={questions[matchNumToString(Number(stage))]}
            onChange={onChange}
            onChangeArray={onChangeArray}
          />
        );
      case 16:
        return (
          <StageSixteen
            question={questions[matchNumToString(Number(stage))]}
            onChange={onChange}
            onChangeArray={onChangeArray}
          />
        );
      case 17:
        return (
          <StageSeventeen
            onChange={onChange}
            question={questions[matchNumToString(Number(stage))]}
            onChangeArray={onChangeArray}
          />
        );
      default:
        return <Redirect to="/consult?s=1" />;
    }
  };

  return <QuestionBlock>{renderSwitch()}</QuestionBlock>;
};

export default Question;
