// Router
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';

// Redux
import { Provider as ReduxProvider } from 'react-redux';
import store from '../store';

// Material UI
import '@fontsource/roboto';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';
const theme = createTheme({ palette: { mode: 'dark' } });

// Export the component that merge all the providers
export default function AppProviders({ children }) {
  // List of all the app providers
  const providers = [
    [StrictMode],
    [ReduxProvider, { store }],
    [ThemeProvider, { theme }],
    [SnackbarProvider, { maxSnack: 5, autoHideDuration: 2000, anchorOrigin: { vertical: 'top', horizontal: 'right' } }],
    [BrowserRouter],
  ];

  return providers.reduceRight((accumulator, item) => {
    const [Provider, props] = item;
    return <Provider {...props}>{accumulator}</Provider>;
  }, children);
}
