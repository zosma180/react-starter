import AppHeader from './components/AppHeader';
import { Route, Routes } from 'react-router-dom';
import AboutPage from 'pages/about/AboutPage';
import HeroPage from 'pages/hero/HeroPage';

export default function App() {
  return (
    <>
      <AppHeader />

      <Routes>
        <Route
          path="/"
          element={<HeroPage />}
        />

        <Route
          path="/about"
          element={<AboutPage />}
        />
      </Routes>
    </>
  );
}
