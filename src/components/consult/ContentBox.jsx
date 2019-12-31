import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import LeftBox from './LeftBox';
// import MainBox from './MainBox';
import MainBoxContainer from '../../containers/Consult/MainBoxContainer';

const ContentBoxBlock = styled.div`
  background: ${palette.default};
  display: flex;
  @media (min-width: 961px) {
    flex-direction: row;
    width: 900px;
    height: 636px;
    margin: 0 auto;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const ContentBox = () => {
  return (
    <ContentBoxBlock>
      <LeftBox />
      <MainBoxContainer />
    </ContentBoxBlock>
  );
};

export default ContentBox;
