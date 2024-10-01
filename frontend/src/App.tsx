import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';
import UserProfile from './UserProfile';
import ProtectedPage from './ProtectedPage';
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route
        path="/protected"
        element={
          <>
            <SignedIn>
              <ProtectedPage />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      />
    </Routes>
  );
};

export default App;
