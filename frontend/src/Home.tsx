import React from 'react';
import { SignedIn, SignedOut } from '@clerk/clerk-react';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the App</h1>
      <SignedIn>
        <p>You are signed in. Visit your <a href="/profile">profile</a> or <a href="/protected">protected page</a>.</p>
      </SignedIn>
      <SignedOut>
        <p>You are not signed in. Please <a href="/sign-in">sign in</a> or <a href="/sign-up">sign up</a>.</p>
      </SignedOut>
    </div>
  );
};

export default Home;
