import React from 'react';
import styled, { css } from 'styled-components';

const BilateralBlock = styled.div`
  padding: 0 20%;
  height: 100%;
  ${() =>
    global.isMobile &&
    css`
      padding: 0 5%;
    `}
`;

const BilateralPadding = ({ children }) => {
  return <BilateralBlock>{children}</BilateralBlock>;
};

export default BilateralPadding;
