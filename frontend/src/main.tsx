import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ClerkProvider } from '@clerk/clerk-react';
import App from './App';

const clerkPublishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

ReactDOM.render(
  <ClerkProvider publishableKey={clerkPublishableKey}>
    <Router>
      <App />
    </Router>
  </ClerkProvider>,
  document.getElementById('root')
);
