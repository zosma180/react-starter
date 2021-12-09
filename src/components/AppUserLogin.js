import LoginIcon from '@mui/icons-material/Login';
import { Button } from '@mui/material';
import { loginAPI } from 'api/AuthAPI';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { userLoggedIn } from 'store/auth';
import AppLoader from './AppLoader';
import useAsyncState from './AsyncState';

export default function AppUserLogin() {
  const { t } = useTranslation();
  const { isLoading, setLoading, setSuccess, setError } = useAsyncState();
  const dispatch = useDispatch();

  // Define the api call
  const handleClick = async() => {
    setLoading();

    try {
      const request = { email: 'user@reactjs.org' };
      const user = await loginAPI(request);
      setSuccess(t('auth.loginSnackbar', { name: user.firstName }));
      dispatch(userLoggedIn(user));
    } catch (error) {
      setError(error);
    }
  };

  return (
    <Button
      variant="outlined"
      startIcon={isLoading ? <AppLoader size="small" /> : <LoginIcon />}
      disabled={isLoading}
      onClick={handleClick}
    >
      {t('auth.loginButton')}
    </Button>
  );
}
