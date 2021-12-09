import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';

export default function AppPlaceholder() {
  const { t } = useTranslation();

  return (
    <Box sx={styles.root}>
      {t('common.noData')}
    </Box>
  );
};

const styles = {
  root: {
    boxSizing: 'border-box',
    fontSize: '16px',
    padding: '60px',
    textAlign: 'center',
    width: '100%',
  },
};
