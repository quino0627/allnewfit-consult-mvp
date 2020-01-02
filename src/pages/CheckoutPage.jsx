import React from 'react';
import CheckoutPageWrapper from '../components/checkout/CheckoutPageWrapper';
import Header from '../components/common/Header';
import ServiceProgress from '../components/checkout/ServiceProgress';
import IntroductionContainer from '../containers/checkout/IntroductionContainer';
import InputCheckoutDataContainer from '../containers/checkout/InputCheckoutDataContainer';
import InformationUsageAgreement from '../components/checkout/InformationUsageAgreement';

const CheckoutPage = () => {
  return (
    <CheckoutPageWrapper>
      <Header color="white" />
      {/* 문장, 문장, 문장, 커스텀 문장, 커스텀 문장 */}
      <IntroductionContainer />
      {/* 이름, 연락처, 메일 */}
      <InputCheckoutDataContainer />
      {/*  */}

      <InformationUsageAgreement />
      <ServiceProgress />
    </CheckoutPageWrapper>
  );
};

export default CheckoutPage;
