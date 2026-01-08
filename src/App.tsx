import { Route, Routes } from 'react-router';
import NotFound from './components/common/NotFound/NotFound';
import Main from './components/layout/Main/Main';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}

export default App;
