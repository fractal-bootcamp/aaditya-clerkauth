import React from 'react';
import { SignUp } from '@clerk/clerk-react';

const SignUpPage = () => {
  return (
    <div>
      <h1>Create an Account</h1>
      <SignUp redirectUrl="/protected" />
    </div>
  );
};

export default SignUpPage;
