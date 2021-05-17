import React from 'react';
import { Formik } from 'formik';

import { SignupFormComponent } from './signup-form.component';
import { SIGNUP_FORM_FIELD_KEY } from './signup-form.type';

export const SignupFormContainer = (props) => {
  const {
    initialValue,
    validation,
    onSubmitForm,
    fieldName,
    isPending,
    isSuccess,
    isError,
    errorMessage,
    pageLoading,
  } = props;

  const LOGIN_NAME = fieldName[SIGNUP_FORM_FIELD_KEY.LOGIN];
  const PASSWORD_NAME = fieldName[SIGNUP_FORM_FIELD_KEY.PASSWORD];

  return (
    <div>
      <Formik
        initialValues={initialValue}
        validate={validation}
        onSubmit={onSubmitForm}
      >
        {(formProps) => (
          <SignupFormComponent
            fieldLogin={LOGIN_NAME}
            fieldPassword={PASSWORD_NAME}
            {...formProps}
            isPending={isPending}
            isSuccess={isSuccess}
            isError={isError}
            errorMessage={errorMessage}
            pageLoading={pageLoading}
          />
        )}
      </Formik>
    </div>
  );
};
