import React from 'react';
import styled from 'styled-components';

const BilateralBlock = styled.div`
  padding: 0 20%;
  height: 100%;
`;

const BilateralPadding = ({ children }) => {
  return <BilateralBlock>{children}</BilateralBlock>;
};

export default BilateralPadding;
