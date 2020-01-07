/* eslint-disable no-shadow */
import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import InputCheckoutData from '../../components/checkout/InputCheckoutData';
import { changeInputValue, applyConsult } from '../../modules/question';

const InputCheckoutDataContainer = () => {
  const dispatch = useDispatch();
  const [nameError, setNameError] = useState(null);
  const [phoneError, setPhoneError] = useState(null);
  const [consultTypeError, setConsultTypeError] = useState(null);
  const { name, email, phone, questions, consultType, loading, apply, applyError } = useSelector(
    ({ question, loading }) => ({
      name: question.name,
      email: question.email,
      phone: question.phone,
      questions: question.questions,
      consultType: question.consultType,
      apply: question.apply,
      applyError: question.applyError,
      loading: loading['question/APPLY_CONSULT'],
    }),
  );

  const onChangeInputValue = useCallback(
    payload => {
      dispatch(changeInputValue(payload));
    },
    [dispatch],
  );

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      if (!name) {
        setNameError('이름을 입력해 주세요.');
        return;
      }
      setNameError(null);
      if (!phone) {
        setPhoneError('전화번호를 입력해 주세요.');
        return;
      }
      setPhoneError(null);
      if (!consultType) {
        setConsultTypeError('디자인 타입을 선택해 주세요.');
        return;
      }
      setConsultTypeError(null);
      dispatch(
        applyConsult({
          personalInfo: JSON.stringify({ name, phone, email, consultType, questions }),
        }),
      );
    },
    [dispatch, email, name, phone, consultType, questions],
  );

  return (
    <InputCheckoutData
      onChangeInputValue={onChangeInputValue}
      onSubmit={onSubmit}
      name={name}
      nameError={nameError}
      email={email}
      phone={phone}
      phoneError={phoneError}
      consultType={consultType}
      consultTypeError={consultTypeError}
      loading={loading}
      apply={apply}
      applyError={applyError}
    />
  );
};

export default InputCheckoutDataContainer;
