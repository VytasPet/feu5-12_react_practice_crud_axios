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

  //const isLoggedIn = token === '' ? false : true;
  //const isLoggedIn = token ? true : false;
  const isLoggedIn = !!token;

  function login(userToken, userEmail) {
    setToken(userToken);
    setEmail(userEmail);
  }

  function logout() {
    setToken('');
    setEmail('');
  }

  // sukurti funkcija logout
  // nustato token ir email i  ''

  const authCtx = {
    token,
    email,
    login,
    isLoggedIn,
    logout,
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
