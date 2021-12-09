import AppMenu from './components/AppMenu';
import { Route, Switch } from 'react-router-dom';
import AboutPage from 'pages/about/AboutPage';
import HeroPage from 'pages/hero/HeroPage';

export default function App() {
  return (
    <>
      <AppMenu />

      <Switch>
        <Route
          path="/"
          exact
          children={<HeroPage />}
        />

        <Route
          path="/about"
          children={<AboutPage />}
        />
      </Switch>
    </>
  );
}
