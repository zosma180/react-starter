import Button from '@mui/material/Button';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import HeroEditDialog from './HeroEditDialog';

export default function HeroCreateButton(props) {
  const { onReload } = props;
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const { t } = useTranslation();

  // Handle the dialog opening
  const handleButtonClick = () => setEditDialogOpen(true);

  // Handle the dialog closing
  const handleEditDialogClose = shouldReload => {
    setEditDialogOpen(false);

    if (shouldReload) {
      onReload();
    }
  };

  return (
    <>
      <Button
        variant="contained"
        size="large"
        onClick={handleButtonClick}
      >
        {t('hero.newButton')}
      </Button>

      <HeroEditDialog
        open={editDialogOpen}
        onClose={handleEditDialogClose}
      />
    </>
  );
}
