import { Route, Routes } from 'react-router';
import NotFound from './components/common/NotFound/NotFound';
import MainLayout from './components/layout/MainLayout/MainLayout';
import RegisterPage from './components/pages/RegisterPage/RegisterPage';
import LoginPage from './components/pages/LoginPage/LoginPage';
import RecommendedPage from './components/pages/RecommendedPage/RecommendedPage';
import LibraryPage from './components/pages/LibraryPage/LibraryPage';
import ReadingPage from './components/pages/ReadingPage/ReadingPage';

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
