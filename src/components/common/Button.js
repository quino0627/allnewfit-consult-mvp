/** 프로젝트 전체에서 사용하기 위한 버튼 컴포넌트입니다.
 * 작성자 : 송동욱
 * 작성일시 : 7월 30일
 */

/** 사용 예시
  * <Button disabled={true}>Hello</Button>
      <Button to="as">Hello</Button>
      <Button>Hello</Button>
  */
import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
// import { Round } from '../../lib/styles/Round';

const Div = ({ children, ...rest }) => <div {...rest}>{children}</div>;

/** children은 버튼 안에 들어갈 글자입니다.
 *  to 는 버튼을 Link로 만듭니다.
 *  disabled는 boolean값을 가집니다. true이면 버튼 비활성화
 * theme은 버튼 색깔을 바꿉니다.
 */
const Button = ({ children, to, onClick, disabled = false, theme = 'default', hide = 'true' }) => {
  const Element = to && !disabled ? Link : Div;
  const ElementBlock = styled(Element)`
     /* padding-left: 2.25rem;
     padding-right: 2.25rem; */
     width: 144px;
     height: 56px;
     /* padding-top: 1rem;
     padding-bottom: 1rem; */
     font-weight: 600;
     font-size: 16px;
     color: #00000054;
     cursor: pointer;
     user-select: none;
     display: inline-flex;
     margin: 0 4px;
     display: flex;
     justify-content: center;
     align-items: center;
 
    ${props =>
      props.hide === 'true' &&
      css`
        display: none;
      `}
     ${props =>
       props.theme === 'default' &&
       css`
         &:hover,
         &:focus {
           background: #7f8c8d;
         }
       `}

    ${props =>
      props.theme === 'goToForm' &&
      css`
        border-radius: 5px;
        background-color: #3742fa;
        color: #ced6e0;
        font-weight: 500;
        padding: 0 24px;
        margin-top: 30px;
      `}
     ${props =>
       props.theme === 'goToNext' &&
       css`
         width: 80px;
         height: 50px;
         border-radius: 5px;
         background-color: ${palette.clearChill};
         border: 1px solid ${palette.clearChill};
         color: ${palette.default};
         font-weight: 500;
         padding: 0 24px;
         margin-top: 30px;
       `}
       ${props =>
         props.theme === 'goToPrev' &&
         css`
           width: 80px;
           height: 50px;
           border-radius: 5px;
           background-color: transparent;
           border: 1px solid ${palette.peace};
           color: ${palette.peace};
           font-weight: 500;
           padding: 0 24px;
           margin-top: 30px;
           /* &:hover,
         &:focus {
           background: #7f8c8d;
         } */
         `}

  
     ${props =>
       props.theme === 'bigPink' &&
       css`
         color: #ff8989;
         width: 12rem;
         border: 0.1rem solid #ff8989;
         border-radius: 5px;

         &:hover,
         &:focus {
           color: #f84444;
           border: 0.1rem solid #f84444;
         }
       `}
     ${props =>
       props.theme === 'mainButton' &&
       css`
         color: #000000d4;
         width: 12rem;
         border: 0.1rem solid #00000061;
         border-radius: 5px;

         &:hover,
         &:focus {
           color: #f84444;
           border: 0.1rem solid #f84444;
         }
       `}
     
 
     
   `;

  return (
    <ElementBlock
      /** style={Round} css 우선순위 때문에 주석처리 */
      to={to}
      theme={theme}
      disabled={disabled}
      onClick={disabled ? () => null : onClick}
      hide={hide}
    >
      {children}
    </ElementBlock>
  );
};

export default Button;
