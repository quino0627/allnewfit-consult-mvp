import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeValue, initialize } from '../../modules/question';
import MainBox from '../../components/consult/MainBox';

const MainBoxContainer = () => {
  const dispatch = useDispatch();
  const { questions } = useSelector(({ question }) => ({
    questions: question.questions,
  }));

  const onChange = ({ stage, field, value }) => {
    console.log(stage, field, value);
    dispatch(changeValue({ stage, field, value }));
  };
  return <MainBox questions={questions} onChange={onChange} />;
};

export default MainBoxContainer;
