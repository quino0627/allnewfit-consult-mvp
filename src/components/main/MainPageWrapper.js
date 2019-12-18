import React from 'react';
import styled from 'styled-components';

const MainPageWrapperBlock = styled.div``;

const MainPageWrapper = ({ children }) => {
  return <MainPageWrapperBlock>{children}</MainPageWrapperBlock>;
};

export default MainPageWrapper;
