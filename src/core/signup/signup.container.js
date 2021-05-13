import React from 'react';

import { SignupFormContainer } from './frames/signup-form';

import { SIGNUP_FORM_FIELD_NAME } from './signup.type';
import { signupFormValidation } from './signup.validation';

export function SignupContainer() {
  const signupFormSendData = (values) => {
    //...
  };

  const signupFormGetInitialValue = () => {
    return {
      [SIGNUP_FORM_FIELD_NAME.LOGIN]: '',
      [SIGNUP_FORM_FIELD_NAME.PASSWORD]: '',
    };
  };

  return (
    <SignupFormContainer
      initialValue={signupFormGetInitialValue()}
      validation={signupFormValidation}
      onSubmitForm={signupFormSendData}
      fieldName={SIGNUP_FORM_FIELD_NAME}
    />
  );
}
