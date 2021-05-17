import { text } from '../../lib/common/text';

export function signupFormValidation(values) {
  const errors = {};

  if (!values.login) {
    errors.login = text('ERROR.VALIDATION.REQUIRED');
  }

  return errors;
}
