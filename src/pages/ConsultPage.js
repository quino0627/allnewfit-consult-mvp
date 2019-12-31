import React from 'react';
import ConsultPageWrapper from '../components/consult/ConsultPageWrapper';
import Header from '../components/common/Header';
import ContentBox from '../components/consult/ContentBox';

const ConsultPage = () => {
  return (
    <ConsultPageWrapper>
      {/* <Header color="white" /> */}
      <ContentBox />
    </ConsultPageWrapper>
  );
};

export default ConsultPage;
