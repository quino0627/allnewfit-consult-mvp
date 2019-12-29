import React from 'react';
import ConsultLoadingPageWrapper from '../components/consult/ConsultLoadingPageWrapper';
import Header from '../components/common/Header';
import ProgressBarContainer from '../containers/Common/ProgressBarContainer';

const ConsultPage = () => {
  return (
    <ConsultLoadingPageWrapper>
      <Header color="white" />
      <ProgressBarContainer />
    </ConsultLoadingPageWrapper>
  );
};

export default ConsultPage;
