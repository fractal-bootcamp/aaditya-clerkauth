import React from 'react';
import { UserButton } from '@clerk/clerk-react';

const UserProfile = () => {
  return (
    <div>
      <h1>Your Profile</h1>
      <p>Manage your account below:</p>
      <UserButton />
    </div>
  );
};

export default UserProfile;
