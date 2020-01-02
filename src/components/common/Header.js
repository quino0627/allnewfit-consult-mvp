import React from 'react';
import styled from 'styled-components';
import BilateralPadding from './BilateralPadding';
import palette from '../../lib/styles/palette';

/** 헤더 공간 확보 */
const HeaderBlock = styled.header`
  width: 100%;
  height: 80px;
  z-index: 100;
  /* position: fixed; */
  top: 0;
  margin-top: 0;
  background-color: ${props => palette[props.color]};
`;

/** 중앙정렬하는 컴포넌트 */
const InnerHeader = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
/** 로고 컴포넌트 */
const Logo = styled.img`
  width: 300px;
  height: auto;
`;

/** 차후에 메뉴가 들어갈 가능성을 위해... */
// const Menus = styled.ul``

const Header = ({ color = 'default' }) => {
  return (
    <HeaderBlock color={color}>
      <BilateralPadding>
        <InnerHeader>
          <Logo src={`${window.location.origin}/images/logo_symbol.jpg`} />
        </InnerHeader>
      </BilateralPadding>
    </HeaderBlock>
  );
};

export default Header;
