import React from 'react';
import styled from 'styled-components';
import BilateralPadding from '../common/BilateralPadding';

const MainContentBlock = styled.div`
  margin-top: 80px;
  /* background: blue; */
  box-sizing: border-box;
  height: calc(100vh - 80px);
  width: 100vw;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 100vw;
    height: calc(100vh - 80px);
    top: 0;
    left: 0;
    z-index: -1;
    background-image: url(${window.location.origin + '/images/background.jpg'});
    transform: scaleX(-1); /* Flip Image */
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    overflow: hidden;
    overflow-y: hidden;
  }
`;
const MainContent = () => {
  return (
    <MainContentBlock>
      <BilateralPadding>aaaaaa</BilateralPadding>
    </MainContentBlock>
  );
};

export default MainContent;
