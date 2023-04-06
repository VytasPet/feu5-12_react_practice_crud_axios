import { createContext, useState } from 'react';

const AuthContext = createContext({
  token: null,
  login(token, email) {},
  logout() {},
  isLoggedIn: false,
});

function AuthProvider() {
  const [token, setToken] = useState('');
  const [email, setEmail] = useState('');

  const authCtx = {
    token,
    email,
  };
  return (
    <AuthContext.Provider value={authCtx}>AuthProvider</AuthContext.Provider>
  );
}

export default AuthProvider;
