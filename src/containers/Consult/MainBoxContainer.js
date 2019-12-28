import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeValue, changeArrayValue, initialize } from '../../modules/question';
import MainBox from '../../components/consult/MainBox';

const MainBoxContainer = () => {
  const dispatch = useDispatch();
  const { questions } = useSelector(({ question }) => ({
    questions: question.questions,
  }));

  const onChange = ({ stage, field, value }) => {
    dispatch(changeValue({ stage, field, value }));
  };

  const onChangeArray = ({ stage, field, value }) => {
    dispatch(changeArrayValue({ stage, field, value }));
  };
  return <MainBox questions={questions} onChange={onChange} onChangeArray={onChangeArray} />;
};

export default MainBoxContainer;
