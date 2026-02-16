import { Route, Routes, Navigate } from 'react-router';
import NotFound from './components/common/NotFound/NotFound';
import MainLayout from './components/layout/MainLayout/MainLayout';
import RegisterPage from './components/pages/RegisterPage/RegisterPage';
import LoginPage from './components/pages/LoginPage/LoginPage';
import RecommendedPage from './components/pages/RecommendedPage/RecommendedPage';
import LibraryPage from './components/pages/LibraryPage/LibraryPage';
import ReadingPage from './components/pages/ReadingPage/ReadingPage';
import { useAuthStore } from './store/authStore';

function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <main>
      <Routes>
        {/* Public routes - доступні тільки неавторизованим */}
        <Route
          path="/register"
          element={isAuthenticated ? <Navigate to="/recommended" replace /> : <RegisterPage />}
        />
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/recommended" replace /> : <LoginPage />}
        />

        {/* Private routes - доступні тільки авторизованим */}
        <Route
          path="/"
          element={isAuthenticated ? <MainLayout /> : <Navigate to="/login" replace />}
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
