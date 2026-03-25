import { Route, Routes, Navigate } from 'react-router';
import { useEffect } from 'react';
import NotFound from './components/common/NotFound/NotFound';
import MainLayout from './components/layout/MainLayout/MainLayout';
import RegisterPage from './components/pages/RegisterPage/RegisterPage';
import LoginPage from './components/pages/LoginPage/LoginPage';
import RecommendedPage from './components/pages/RecommendedPage/RecommendedPage';
import LibraryPage from './components/pages/LibraryPage/LibraryPage';
import ReadingPage from './components/pages/ReadingPage/ReadingPage';
import { useAuthStore } from './store/authStore';

function App() {
  const user = useAuthStore((state) => state.user);
  const checkAuth = useAuthStore((state) => state.checkAuth);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  return (
    <main>
      <Routes>
        {/* Public routes - доступні тільки неавторизованим */}
        <Route
          path="/register"
          element={
            user ? <Navigate to="/recommended" replace /> : <RegisterPage />
          }
        />
        <Route
          path="/login"
          element={
            user ? <Navigate to="/recommended" replace /> : <LoginPage />
          }
        />

        {/* Private routes - доступні тільки авторизованим */}
        <Route
          path="/"
          element={user ? <MainLayout /> : <Navigate to="/login" replace />}
        >
          <Route path="recommended" element={<RecommendedPage />} />
          <Route path="library" element={<LibraryPage />} />
          <Route path="reading" element={<ReadingPage />} />
          <Route index element={<RecommendedPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
