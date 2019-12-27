import React from 'react';
import styled from 'styled-components';
import queryString from 'query-string';
import { withRouter } from 'react-router-dom';
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

const QuestionBlock = styled.div`
  /* margin-top: 30px; */
`;
const Question = ({ location }) => {
  const { s } = queryString.parse(location.search);

  const renderSwitch = ({ questions }) => {
    console.log(Number(s));
    switch (Number(s)) {
      case 1:
        return <StageOne />;
      case 2:
        return <StageTwo />;
      case 3:
        return <StageThree />;
      case 4:
        return <StageFour />;
      case 5:
        return <StageFive />;
      case 6:
        return <StageSix />;
      case 7:
        return <StageSeven />;
      case 8:
        return <StageEight />;
      case 9:
        return <StageNine />;
      case 10:
        return <StageTen />;
      case 11:
        return <StageEleven />;
      case 12:
        return <StageTwelve />;
      case 13:
        return <StageThirteen />;
      case 14:
        return <StageFourteen />;
      case 15:
        return <StageAfterLoading />;
      default:
        return <div>기본 페이지</div>;
    }
  };

  return <QuestionBlock>{renderSwitch()}</QuestionBlock>;
};

export default withRouter(Question);
