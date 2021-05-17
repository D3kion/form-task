import { SIGNUP_DATA_NAME, SIGNUP_FIELD_NAME } from './signup.type';

export const convertSignupFormData = (data) => ({
  [SIGNUP_DATA_NAME.LOGIN]: data[SIGNUP_FIELD_NAME.LOGIN],
  [SIGNUP_DATA_NAME.PASSWORD]: data[SIGNUP_FIELD_NAME.PASSWORD],
});
