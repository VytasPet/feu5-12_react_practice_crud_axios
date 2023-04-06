import { createContext, useContext, useState } from 'react';

const AuthContext = createContext({
  token: null,
  login(token, email) {},
  logout() {},
  isLoggedIn: false,
});

function AuthProvider({ children }) {
  const [token, setToken] = useState('');
  const [email, setEmail] = useState('');

  const authCtx = {
    token,
    email,
  };
  return (
    <AuthContext.Provider value={authCtx}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;

// custon useAuthCtx hook 2 lvl burtas
export function useAuthContext() {
  const ctx = useContext(AuthContext);
  return ctx;
}
