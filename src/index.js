import { render } from 'react-dom';
import App from './App';
import AppProviders from './components/AppProviders';
import './i18n';
import './index.css';
import init from './init';
import reportWebVitals from './reportWebVitals';

init().then(() => {
  render(
    <>
      <AppProviders>
        <App />
      </AppProviders>
    </>,
    document.getElementById('root'),
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
