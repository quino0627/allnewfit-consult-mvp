import React from 'react';
import CheckoutPageWrapper from '../components/checkout/CheckoutPageWrapper';
import Header from '../components/common/Header';
import Introduction from '../components/checkout/Introduction';
import InputCheckoutData from '../components/checkout/InputCheckoutData';
import ServiceProgress from '../components/checkout/ServiceProgress';

const CheckoutPage = () => {
  return (
    <CheckoutPageWrapper>
      <Header color="white" />
      <div style={{ marginTop: '80px' }} />
      {/* 문장, 문장, 문장, 커스텀 문장, 커스텀 문장 */}
      <Introduction />
      {/* 이름, 연락처, 메일 */}
      <InputCheckoutData />
      {/*  */}
      <ServiceProgress />
    </CheckoutPageWrapper>
  );
};

export default CheckoutPage;
