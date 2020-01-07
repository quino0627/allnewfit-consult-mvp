import React from 'react';
import styled from 'styled-components';

const HeaderBlock = styled.div`
  margin-top: 10px;
  font-size: 18px;
`;

const QuestionHeader = ({ title }) => {
  return <HeaderBlock>{title}</HeaderBlock>;
};

export default QuestionHeader;
