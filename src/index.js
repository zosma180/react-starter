import { render } from 'react-dom';
import App from './App';
import AppProviders from './AppProviders';
import './i18n';
import './index.css';
import reportWebVitals from './reportWebVitals';

fetch('/env.json').then(async response => {
  const env = await response.json();

  render(
    <>
      <AppProviders env={env}>
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
