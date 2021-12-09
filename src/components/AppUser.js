import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { userAcronymSelector } from 'store/auth';
import AppUserLogin from './AppUserLogin';
import AppUserLogout from './AppUserLogout';

export default function AppUser() {
  const [menuAnchor, setMenuAnchor] = useState(null);
  const isLoggedIn = useSelector(({ auth }) => auth.isLoggedIn);
  const userAcronym = useSelector(userAcronymSelector);

  // Handle the menu opening
  const handleMenuOpen = event => setMenuAnchor(event.currentTarget);

  // Handle the menu closing
  const handleMenuClose = () => setMenuAnchor(null);

  return (
    isLoggedIn
      ? (
        <>
          <Tooltip title="Account menu">
            <IconButton
              onClick={handleMenuOpen}
              size="small"
            >
              <Avatar>
                {userAcronym}
              </Avatar>
            </IconButton>
          </Tooltip>

          <Menu
            anchorEl={menuAnchor}
            open={menuAnchor !== null}
            onClose={handleMenuClose}
            onClick={handleMenuClose}
          >
            <AppUserLogout />
          </Menu>
        </>
      )
      : <AppUserLogin />
  );
}
