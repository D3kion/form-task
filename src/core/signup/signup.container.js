import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { NAVIGATION_STORE_NAME } from '../../lib/common/navigation';
import {
  getRequestErrorMessage,
  isRequestError,
  isRequestPending,
  isRequestSuccess,
} from '../../main/store/store.service';

import { signupFormUploadData } from './signup.action';
import { SignupComponent } from './signup.component';
import { SIGNUP_STORE_NAME } from './signup.constant';
import { convertSignupFormData } from './signup.convert';
import { SIGNUP_FIELD_NAME, SIGNUP_FORM_FIELD_NAME } from './signup.type';
import { signupFormValidation } from './signup.validation';

export function SignupContainer() {
  const dispatch = useDispatch();
  const { state, pageLoading } = useSelector((state) => ({
    state: state[SIGNUP_STORE_NAME],
    pageLoading: state[NAVIGATION_STORE_NAME],
  }));

  const signupFormSendData = (values) => {
    const data = convertSignupFormData(values);

    dispatch(signupFormUploadData(data));
  };

  const signupFormGetInitialValue = () => {
    return {
      [SIGNUP_FIELD_NAME.LOGIN]: '',
      [SIGNUP_FIELD_NAME.PASSWORD]: '',
    };
  };

  return (
    <SignupComponent
      isPending={isRequestPending(state.signupForm)}
      isError={isRequestError(state.signupForm)}
      isSuccess={isRequestSuccess(state.signupForm)}
      errorMessage={getRequestErrorMessage(state.signupForm)}
      initialValue={signupFormGetInitialValue()}
      validation={signupFormValidation}
      onSubmitForm={signupFormSendData}
      fieldName={SIGNUP_FORM_FIELD_NAME}
      pageLoading={pageLoading}
    />
  );
}
