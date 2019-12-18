import React from 'react';
import styled from 'styled-components';

const CenterBlock = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 250px 20px 150px;
  box-sizing: content-box;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 45px;
  font-weight: 600;
  color: #f6b44d;
`;
const NotFoundPage = ({ location }) => {
  if (
    location.pathname
      .toLowerCase()
      .trim()
      .includes('api')
  ) {
    return <CenterBlock>훌륭한 시도였다...</CenterBlock>;
  }
  if (
    location.pathname
      .toLowerCase()
      .trim()
      .includes('admin')
  ) {
    return <CenterBlock>Nice Try!</CenterBlock>;
  }
  return <CenterBlock>이상한 페이지에요</CenterBlock>;
};

export default NotFoundPage;
