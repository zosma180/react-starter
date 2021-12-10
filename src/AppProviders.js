// Router
import { StrictMode, createContext } from 'react';
import { BrowserRouter } from 'react-router-dom';

// Redux
import { Provider as ReduxProvider } from 'react-redux';
import store from './store';

// Material UI
import '@fontsource/roboto';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';
const theme = createTheme({ palette: { mode: 'dark' } });

// Create a context to share the global data like the auth and the env data
export const EnvContext = createContext({});

// Export the component that merge all the providers
export default function AppProviders({ children, env }) {
  // List of all the app providers
  const providers = [
    { provider: StrictMode },
    { provider: ReduxProvider, props: { store } },
    { provider: ThemeProvider, props: { theme } },
    {
      provider: SnackbarProvider,
      props: { maxSnack: 5, autoHideDuration: 2000, anchorOrigin: { vertical: 'top', horizontal: 'right' } },
    },
    { provider: BrowserRouter },
    { provider: EnvContext.Provider, props: { value: env } },
  ];

  return providers.reduceRight((accumulator, item) => {
    return <item.provider {...item.props}>{accumulator}</item.provider>;
  }, children);
}
