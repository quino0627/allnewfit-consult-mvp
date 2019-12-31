import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import InputCheckoutData from '../../components/checkout/InputCheckoutData';
import { changeInputValue } from '../../modules/question';

const InputCheckoutDataContainer = () => {
  const dispatch = useDispatch();
  const { name, email, phone } = useSelector(({ question }) => ({
    name: question.name,
    email: question.email,
    phone: question.phone,
  }));

  const onChangeInputValue = useCallback(
    payload => {
      dispatch(changeInputValue(payload));
    },
    [dispatch],
  );
  return (
    <InputCheckoutData
      onChangeInputValue={onChangeInputValue}
      name={name}
      email={email}
      phone={phone}
    />
  );
};

export default InputCheckoutDataContainer;
