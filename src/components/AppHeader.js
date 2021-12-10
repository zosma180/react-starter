import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import AppLanguage from './AppLanguage';
import AppUser from './AppUser';

export default function AppHeader() {
  const { t } = useTranslation();

  return (
    <Box sx={styles.root}>
      <AppLanguage />

      <Box sx={styles.nav}>
        <NavLink to="/">
          {t('common.menu.home')}
        </NavLink>

        <NavLink to="/about">
          {t('common.menu.about')}
        </NavLink>
      </Box>

      <AppUser />
    </Box>
  );
}

const styles = {
  root: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 15px 15px 15px',
    position: 'relative',
  },

  nav: {
    '& a': {
      boxSizing: 'border-box',
      color: '#ccc',
      padding: '20px 30px',
      textDecoration: 'none',

      '&.active': {
        borderBottom: '2px solid white',
        color: 'white',
      },
    },
  },
};
