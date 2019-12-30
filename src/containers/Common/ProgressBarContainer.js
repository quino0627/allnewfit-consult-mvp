import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ProgressBar from '../../components/common/ProgressBar';
import { setPercent, fakeProgressStart, initialize } from '../../modules/progress';
import { getRandomIntInclusive } from '../../lib/library';
import useRecursiveTimeout from '../../lib/hooks/useRecursiveTimeout';

const ProgressBarContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { percent, autoIncrement, intervalTime, questions } = useSelector(
    ({ progress, question }) => ({
      percent: progress.percent,
      autoIncrement: progress.autoIncrement,
      intervalTime: progress.intervalTime,
      questions: question.questions,
    }),
  );

  const timer = () => {
    if (percent < 90) {
      dispatch(setPercent({ percent: percent + getRandomIntInclusive(1, 10) }));
    } else {
      dispatch(setPercent({ percent: 100 }));
    }
  };

  useRecursiveTimeout(() => {
    if (percent < 100) {
      timer();
    }
  }, 300);

  useEffect(() => {
    if (percent === 100) {
      setTimeout(() => history.push('/checkout'), 2000);
      localStorage.setItem('questions', JSON.stringify(questions));
    }
  }, [history, percent, questions]);

  useEffect(() => {
    dispatch(initialize());
    dispatch(fakeProgressStart());
    return () => {
      dispatch(initialize());
    };
  }, []);

  return <ProgressBar percent={percent} />;
};

export default withRouter(ProgressBarContainer);
