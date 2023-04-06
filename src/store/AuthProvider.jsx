import { createContext, useContext, useState } from 'react';

const AuthContext = createContext({
  token: null,
  login(userToken, userEmail) {},
  logout() {},
  isLoggedIn: false,
});

function AuthProvider({ children }) {
  const [token, setToken] = useState('');
  const [email, setEmail] = useState('');

  // const isLoggedIn = token === '' ? false : true;
  // const isLoggedIn = token ? true : false;
  const isLoggedIn = !!token;

  function login(userToken, userEmail) {
    setToken(userToken);
    setEmail(userEmail);
  }

  // sukurti funkcija logout
  // nustato token ir email i ''
  // perduodam logout i authCtx
  // panaudojam logout Hederyje paspaudus logout mygtuka

  const authCtx = {
    token,
    email,
    login,
    isLoggedIn,
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
