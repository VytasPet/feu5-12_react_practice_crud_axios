import './styles/reset.css';
import './styles/App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ContactPage from './pages/ConactPage';
import Header from './components/layout/Header';
import PostsPage from './pages/PostsPage';
import NewPostPage from './pages/NewPostPage';
import SinglePostPage from './pages/SinglePostPage';
import { useAuthContext } from './store/AuthProvider';
import NotAllowed from './pages/NotAllowed';

function App() {
  const authCtx = useAuthContext();
  // App.jsx prideti dinamini route SinglePostPage
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route
          path={'/login'}
          element={
            <>
              {!authCtx.isLoggedIn && <LoginPage />}
              {authCtx.isLoggedIn && <Navigate to="/posts" />}
            </>
          }
        />
        <Route path={'/contact'} element={<ContactPage />} />
        <Route
          path={'/posts/'}
          element={
            <>
              {authCtx.isLoggedIn && <PostsPage />}
              {!authCtx.isLoggedIn && <Navigate to="/not-allowed" />}
            </>
          }
        />
        <Route path={'/posts/:postId'} element={<SinglePostPage />} />
        <Route
          path={'/posts/new'}
          element={
            <>
              {authCtx.isLoggedIn && <NewPostPage />}
              {!authCtx.isLoggedIn && <Navigate to="/not-allowed" />}
            </>
          }
        />
        <Route path={'/not-allowed'} element={<NotAllowed />} />
      </Routes>
    </div>
  );
}
export default App;
