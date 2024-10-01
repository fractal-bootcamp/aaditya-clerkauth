import React from 'react';
import { useUser } from '@clerk/clerk-react';

const ProtectedPage = () => {
  const { user } = useUser();

  return (
    <div>
      <h1>Protected Page</h1>
      <p>Only signed-in users can see this page.</p>
      <div>
        <h2>User Information</h2>
        <p><strong>Name:</strong> {user?.firstName} {user?.lastName}</p>
        <p><strong>Email:</strong> {user?.primaryEmailAddress?.emailAddress}</p>
        <p><strong>Username:</strong> {user?.username}</p>
      </div>
    </div>
  );
};

export default ProtectedPage;
