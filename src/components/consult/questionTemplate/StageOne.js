/** Introduction about this screening */
import React from 'react';
import styled from 'styled-components';
import QuestionHeader from '../QuestionComponent/QuestionHeader';

const ImgWithSentence = styled.div``;
const StageOne = () => {
  return (
    <div>
      <QuestionHeader title="내 몸에 맞는 운동을 찾아 보세요." />
      <ImgWithSentence>맨</ImgWithSentence>
    </div>
  );
};

export default StageOne;
