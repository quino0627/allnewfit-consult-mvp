import React from 'react';
import styled from 'styled-components';
import IoChatBubbles from 'react-icons/lib/io/chatbubbles';

const StyledIoChatBubbles = styled(IoChatBubbles)`
  color: white;
  width: 50px;
  height: 50px;
  margin-bottom: 5px;
`;
const ButtonBlock = styled.button``;

const CircleBlock = styled.a`
  position: fixed;
  bottom: 30px;
  right: 50px;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  border: none;
  background: linear-gradient(60deg, #62a6d8, #0076cd);
  color: red;
  cursor: pointer;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Description = styled.a`
  box-sizing: border-box;
  &:link {
    color: inherit;
    text-decoration: none;
  }
  &:visited {
    color: inherit;
    text-decoration: none;
  }
  &:hover {
    color: inherit;
    text-decoration: none;
  }
  display: block;
  cursor: pointer;
  position: fixed;
  bottom: 37.5px;
  right: 87.5px;
  height: 60px;
  width: 175px;
  border-radius: 30px 10px 10px 30px;
  background: #ededed;
  z-index: 900;
  font-size: 15px;
  font-weight: 600;
  padding: 20px 35px 20px 15px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 3px 12px 0px !important;
`;

const ChattingButton = () => {
  return (
    <ButtonBlock>
      <CircleBlock
        target="_blank"
        rel="noopener noreferrer"
        href="http://pf.kakao.com/_xoxaAgT/chat"
      >
        <StyledIoChatBubbles />
      </CircleBlock>
      <Description
        target="_blank"
        rel="noopener noreferrer"
        href="http://pf.kakao.com/_xoxaAgT/chat"
      >
        카카오톡 상담하기
      </Description>
    </ButtonBlock>
  );
};

export default ChattingButton;
