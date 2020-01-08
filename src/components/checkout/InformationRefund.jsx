import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import FaPlus from 'react-icons/lib/fa/plus';
import FaMinus from 'react-icons/lib/fa/minus';
import InnerBox from './InnerBox';
import palette from '../../lib/styles/palette';
import {
  personalInformationAgreementParagraph,
  personalInformationAgreementTitle,
  consultAgreementTitle,
  consultAgreementParagraph,
  refundTitle,
  refundParagraph,
} from '../../lib/sentences';

const HeaderSentence = styled.div`
  font-size: 24px;
  color: ${palette.default};
  margin-bottom: 10px;
`;

const Descriptionsentence = styled.div`
  font-size: 14px;
  color: ${palette.grisaille};

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

const DescriptionParagraph = styled.div`
  font-size: 12px;
  color: ${palette.grisaille};
  max-height: 0px;
  overflow: hidden;
  ${props =>
    props.clicked === 'true' &&
    css`
      max-height: 200px;
      transition: max-height 0.5s ease-out;
      overflow: scroll;
    `}

  transition: max-height 0.5s ease-out;
`;

const Togglebar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 20px;
  cursor: pointer;
`;

const InformationRefund = () => {
  // Refund
  const [clicked, setClicked] = useState(false);

  return (
    <section>
      <InnerBox color="cityLights">
        <Togglebar
          onClick={() => {
            setClicked(!clicked);
          }}
        >
          <Descriptionsentence>{refundTitle}</Descriptionsentence>
          {!clicked ? <FaPlus /> : <FaMinus />}
        </Togglebar>
        <DescriptionParagraph clicked={clicked.toString()}>{refundParagraph}</DescriptionParagraph>
      </InnerBox>
    </section>
  );
};

export default InformationRefund;
