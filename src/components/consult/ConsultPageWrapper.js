import React from 'react';
import styled from 'styled-components';

const ConsultPageWrapperBlock = styled.div`
  display: table-cell;
  vertical-align: middle;
  width: 100vw;
  height: 100vh;
`;

const ConsultPageWrapper = ({ children }) => {
  return <ConsultPageWrapperBlock>{children}</ConsultPageWrapperBlock>;
};

export default ConsultPageWrapper;
