import React from 'react';
import styled from 'styled-components';

import { text } from '../../../../lib/common/text';
import { FieldLayout } from '../../../../lib/elements/layout';
import { FieldPrimary } from '../../../../lib/elements/field';
import { ButtonPrimary } from '../../../../lib/elements/button';
import { Loader } from '../../../../lib/elements/loader';
import { Error } from '../../../../lib/elements/error';

export function SignupFormComponent(props) {
  const {
    fieldLogin,
    fieldPassword,

    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,

    isPending,
    isSuccess,
    isError,
    errorMessage,

    pageLoading,
  } = props;

  const getFieldError = (name) => {
    return errors[name] && touched[name] && errors[name];
  };

  const isSubmitDisabled = () => {
    return isPending || isSuccess;
  };

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <FieldLayout>
          <FieldPrimary
            titleTid="SIGNUP.SIGNUP_FORM.FIELD.LOGIN.TITLE"
            placeholderTid="SIGNUP.SIGNUP_FORM.FIELD.LOGIN.PLACEHOLDER"
            name={fieldLogin}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[fieldLogin]}
            error={getFieldError(fieldLogin)}
          />
          <FieldPrimary
            titleTid="SIGNUP.SIGNUP_FORM.FIELD.PASSWORD.TITLE"
            placeholderTid="SIGNUP.SIGNUP_FORM.FIELD.PASSWORD.PLACEHOLDER"
            name={fieldPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[fieldPassword]}
            error={getFieldError(fieldPassword)}
          />
        </FieldLayout>
        <ButtonPrimary type="submit" disabled={isSubmitDisabled()}>
          {text('SIGNUP.SIGNUP_FORM.BUTTON.SUBMIT')}
        </ButtonPrimary>
        {isPending && <Loader />}
        {isError && <Error>{errorMessage}</Error>}
      </Container>
    </form>
  );
}

const Container = styled.div`
  display: grid;
  gap: 12px;
`;
