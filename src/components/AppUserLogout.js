import LogoutIcon from '@mui/icons-material/Logout';
import ListItemIcon from '@mui/material/ListItemIcon';
import MenuItem from '@mui/material/MenuItem';
import { logoutAPI } from 'api/AuthAPI';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { userLoggedOut } from 'store/auth';
import useAsyncState from './AsyncState';

export default function AppUserLogout() {
  const { t } = useTranslation();
  const { setError } = useAsyncState();
  const dispatch = useDispatch();

  // Define the api call
  const handleClick = async() => {
    try {
      await logoutAPI();
      dispatch(userLoggedOut());
    } catch (error) {
      setError(error);
    }
  };

  return (
    <MenuItem onClick={handleClick}>
      <ListItemIcon>
        <LogoutIcon fontSize="small" />
      </ListItemIcon>

      {t('auth.logoutButton')}
    </MenuItem>
  );
}
