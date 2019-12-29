import React from 'react';
import styled from 'styled-components';

const ConsultLoadingPageWrapperBlock = styled.div`
  display: table-cell;
  vertical-align: middle;
  width: 100vw;
  height: 100vh;
`;

const ConsultLoadingPageWrapper = ({ children }) => {
  return <ConsultLoadingPageWrapperBlock>{children}</ConsultLoadingPageWrapperBlock>;
};

export default ConsultLoadingPageWrapper;
