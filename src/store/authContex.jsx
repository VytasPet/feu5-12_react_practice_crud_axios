import { createContext } from 'react';

const AuthContext = createContext({
  token: null,
  login(token, email) {},
  logout() {},
  isLoggedIn: false,
});
