import { Route, Routes } from 'react-router';
import NotFound from './components/common/NotFound/NotFound';
import MainLayout from './components/layout/MainLayout/MainLayout';
import LibraryPage from './pages/LibraryPage/LibraryPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ReadingPage from './pages/ReadingPage/ReadingPage';
import RecommendedPage from './pages/RecommendedPage/RecommendedPage';

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />

      {/* Private routes with layout */}
      <Route path="/" element={<MainLayout />}>
        <Route path="recommended" element={<RecommendedPage />} />
        <Route path="library" element={<LibraryPage />} />
        <Route path="reading" element={<ReadingPage />} />
        <Route index element={<RecommendedPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
