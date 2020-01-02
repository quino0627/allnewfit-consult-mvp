import React from 'react';
import styled, { css } from 'styled-components';
import InnerBox from './InnerBox';
import palette from '../../lib/styles/palette';
import { isNullOrEmpty } from '../../lib/library';

const HeaderSentence = styled.div`
  font-size: 24px;
  color: ${palette.default};
  margin-bottom: 10px;
`;

const Descriptionsentence = styled.div`
  font-size: 18px;
  color: ${palette.default};
  ${props =>
    props.center &&
    css`
      text-align: center;
    `}
  ${props =>
    props.bold &&
    css`
      font-weight: bold;
    `}
  margin-bottom: 6px;
`;

const Introduction = ({ purpose, secondaryPurpose, times, where }) => {
  const nodata = value => {
    if (isNullOrEmpty(value)) {
      return '만료되었습니다';
    }
    return value;
  };
  return (
    <section>
      <InnerBox color="clearChill">
        <HeaderSentence>
          맞춤 디자인을 위해 입력된 정보가
          <br />
          담당자에게 배정되었습니다.
        </HeaderSentence>
        <br />
        <br />
        <Descriptionsentence>운동 목적 : {nodata(purpose)}</Descriptionsentence>
        <Descriptionsentence>다음 목적 : {nodata(secondaryPurpose)}</Descriptionsentence>
        <Descriptionsentence>
          일주일 {nodata(times)}, {nodata(where)}
        </Descriptionsentence>
        <Descriptionsentence>을 기반으로 적합한 루틴을 디자인합니다.</Descriptionsentence>
        <br />
        <br />
        <Descriptionsentence center bold>
          1. 아래 항목을 작성하여 제출하시고
        </Descriptionsentence>
        <Descriptionsentence center bold>
          2. 올뉴핏 카카오톡 채널을 추가해주세요
        </Descriptionsentence>
        <Descriptionsentence center bold>
          3. 올뉴핏 채팅방에 제출한 이름(이메일)을 보내주세요
        </Descriptionsentence>
      </InnerBox>
    </section>
  );
};

export default Introduction;
