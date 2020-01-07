import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import BilateralPadding from './BilateralPadding';
import {
  businessNumber,
  busineseCEO,
  businessName,
  serviceCenter,
  mailOrderNumber,
  termsOfUse,
} from '../../lib/sentences';
import palette from '../../lib/styles/palette';
import { ReactComponent as Close } from '../../static/images/close.svg';

const FullScreen = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00000089;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBlock = styled.div`
  position: relative;
  max-width: 500px;
  min-width: 200px;
  width: 500px;
  height: 500px;
  overflow: auto;
  background: ${palette.default};
  text-align: center;
  padding: 50px 20px;
  margin: 50px;
`;

const HeaderSentence = styled.div`
  font-size: 20px;
  color: ${palette.allnewfitBlack};
  margin-bottom: 10px;
  text-align: center;
`;

const MainContentBlock = styled.div`
  color: #ced6e0;
  margin-top: 10vh;
  padding-top: 40px;
  /* background: blue; */
  box-sizing: border-box;
  height: 140px;
  width: 100vw;
  background-color: #57606f;
`;

const ModalCloseButton = styled(Close)`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 20px;
  right: 20px;
  cursor: pointer;
`;

const MainBigWord = styled.div`
  font-size: 14px;
${props =>
  props.inline &&
  css`
    display: inline-block;
  `}
  ${props =>
    props.cursor &&
    css`
      cursor: pointer;
    `}
  /* ${() =>
    global.isMobile &&
    css`
      margin-top: 150px;
    `} */
`;

const ModalParagraph = styled.p`
  color: ${palette.allnewfitBlack};
  font-size: 12px;
  text-align: left;
`;

function useOutsideAlerter(ref, setFocused) {
  /**
   * Alert if clicked on outside of element
   */
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      setFocused(false);
    }
  }

  useEffect(() => {
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
}

const Footer = () => {
  const [focused, setFocused] = useState(false);
  const onFocusChange = () => {
    console.log('hello');
    setFocused(!focused);
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setFocused);

  return (
    <>
      <MainContentBlock>
        <BilateralPadding>
          <MainBigWord inline cursor onClick={onFocusChange}>
            이용약관
          </MainBigWord>
          <MainBigWord>
            {businessName} | {busineseCEO} | 사업자정보확인
          </MainBigWord>
          <MainBigWord>
            {businessNumber} | {mailOrderNumber} | {serviceCenter}
          </MainBigWord>
        </BilateralPadding>
      </MainContentBlock>

      {focused && (
        <FullScreen focused={focused.toString()}>
          <ModalBlock ref={wrapperRef}>
            <ModalCloseButton onClick={onFocusChange} />
            <HeaderSentence>이용약관</HeaderSentence>
            <ModalParagraph>
              {termsOfUse.split('\n').map(line => {
                return (
                  <span>
                    {line}
                    <br />
                  </span>
                );
              })}
            </ModalParagraph>
          </ModalBlock>
        </FullScreen>
      )}
    </>
  );
};

export default Footer;
