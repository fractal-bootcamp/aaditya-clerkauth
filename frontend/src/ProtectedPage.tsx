import React from 'react';
import { SignedIn, SignedOut,  RedirectToSignIn } from '@clerk/clerk-react';

const ProtectedPage = () => {
  return (
    <div>
      <SignedIn>
        <h1>This is a Protected Page</h1>
        <p>Only authenticated users can view this content.</p>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </div>
  );
};

export default ProtectedPage;
