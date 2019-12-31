import React from 'react';
import styled from 'styled-components';

const ConsultPageWrapperBlock = styled.div`
  @media (min-width: 961px) {
    display: table-cell;
    vertical-align: middle;
    width: 100vw;
    height: 100vh;
  }
  @media (max-width: 960px) {
  }
`;

const ConsultPageWrapper = ({ children }) => {
  return <ConsultPageWrapperBlock>{children}</ConsultPageWrapperBlock>;
};

export default ConsultPageWrapper;
