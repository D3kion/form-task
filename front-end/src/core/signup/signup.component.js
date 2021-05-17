import React from 'react';
import { SignupFormContainer } from './frames/signup-form';

export function SignupComponent(props) {
  return (
    <div>
      <div>Signup</div>
      <SignupFormContainer {...props} />
      <div>Already have account? Login!</div>
    </div>
  );
}
