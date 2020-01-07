import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import { changeQuestionValue, changeArrayValue, initialize } from '../../modules/question';
import MainBox from '../../components/consult/MainBox';
import { isNullOrEmpty } from '../../lib/library';

const MainBoxContainer = ({ location, history }) => {
  const { s } = queryString.parse(location.search);
  const dispatch = useDispatch();
  const { questions } = useSelector(({ question }) => ({
    questions: question.questions,
  }));

  const onChange = ({ stage, field, value }) => {
    dispatch(changeQuestionValue({ stage, field, value }));
  };

  const onChangeArray = ({ stage, field, value }) => {
    dispatch(changeArrayValue({ stage, field, value }));
  };

  useEffect(() => {
    // 첫번째 페이지가 아니고, 퀘스쳔1이 널이나 엠티이면
    if (Number(s) !== 1 && isNullOrEmpty(questions.one.value)) {
      history.push('/consult?s=1');
    }
  }, []);

  return <MainBox questions={questions} onChange={onChange} onChangeArray={onChangeArray} />;
};

export default withRouter(MainBoxContainer);
