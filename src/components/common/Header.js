import React from 'react';
import styled from 'styled-components';
import BilateralPadding from './BilateralPadding';

/** 헤더 공간 확보 */
const HeaderBlock = styled.header`
  width: 100%;
  height: 80px;
  z-index: 100;
  position: fixed;
  top: 0;
  margin-top: 0;
  background-color: #f1f2f6;
`;

/** 중앙정렬하는 컴포넌트 */
const InnerHeader = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
/** 로고 컴포넌트 */
const Logo = styled.span`
  font-size: 28px;
  font-weight: bold;
  color: #2f3542;
`;

/** 차후에 메뉴가 들어갈 가능성을 위해... */
// const Menus = styled.ul``

const Header = () => {
  return (
    <HeaderBlock>
      <BilateralPadding>
        <InnerHeader>
          <Logo>ALL NEW FIT</Logo>
        </InnerHeader>
      </BilateralPadding>
    </HeaderBlock>
  );
};

export default Header;
