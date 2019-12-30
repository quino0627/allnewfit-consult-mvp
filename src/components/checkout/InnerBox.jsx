import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';

const InnerBoxBlock = styled.div`
  max-width: 450px;
  min-width: 300px;
  background: ${props => palette[props.color]};
  margin: 0 auto;
  padding: 10px 20px;
`;

const InnerBox = ({ children, color = 'default' }) => {
  return <InnerBoxBlock color={color}>{children}</InnerBoxBlock>;
};

export default InnerBox;
