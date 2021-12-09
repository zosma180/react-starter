import Box from '@mui/material/Box';
import { useTranslation } from 'react-i18next';

export default function AppError() {
  const { t } = useTranslation();

  return (
    <Box sx={styles.root}>
      {t('common.genericError')}
    </Box>
  );
}

const styles = {
  root: {
    boxSizing: 'border-box',
    fontSize: '16px',
    padding: '60px',
    textAlign: 'center',
    width: '100%',
  },
};
