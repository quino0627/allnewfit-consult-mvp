/**
 * 메인 페이지를 렌더링하는 가장 큰 컴포넌트
 * 현재 asdf로 되어 있는 부분에 컴포넌트들을 추가합니다.
 * 주요 컴포넌트의 경우 container으로 변경될 수 있습니다.
 */

import React from 'react';
import MainPageWrapper from '../components/main/MainPageWrapper';
import MainContent from '../components/main/MainContent';
import Header from '../components/common/Header';

const MainPage = () => {
  return (
    <MainPageWrapper>
      <Header />
      <MainContent />
    </MainPageWrapper>
  );
};

export default MainPage;
