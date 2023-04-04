import './styles/reset.css';
import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ContactPage from './pages/ConactPage';
import Header from './components/layout/Header';

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'/login'} element={<LoginPage />} />
        <Route path={'/contact'} element={<ContactPage />} />
      </Routes>
    </div>
  );
}
export default App;
