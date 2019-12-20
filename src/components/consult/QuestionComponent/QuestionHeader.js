import React from 'react';
import styled from 'styled-components';

const HeaderBlock = styled.div`
  font-size: 18px;
`;

const QuestionHeader = ({ title }) => {
  console.log(title);
  return <HeaderBlock>{title}</HeaderBlock>;
};

export default QuestionHeader;
