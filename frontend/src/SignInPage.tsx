import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const SignInPage = () => {
  return (
    <div>
      <h1>Please Sign In</h1>
      <SignIn redirectUrl="/protected" />
    </div>
  );
};

export default SignInPage;
