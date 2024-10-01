import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import SignInPage from './SignInPage';
import SignUpPage from './SignupPage';
import UserProfile from './UserProfile';
import ProtectedPage from './ProtectedPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignInPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/protected" element={<ProtectedPage />} />
    </Routes>
  );
};

export default App;
