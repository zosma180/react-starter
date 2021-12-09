import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { deleteHeroAPI } from 'api/HeroAPI';
import AppLoader from 'components/AppLoader';
import useAsyncState from 'components/AsyncState';
import { useTranslation } from 'react-i18next';

export default function HeroDeleteDialog(props) {
  const { model, open, onClose } = props;
  const { isLoading, setLoading, setSuccess, setError } = useAsyncState();
  const { t } = useTranslation();

  // Define the api call
  const handleSubmitClick = async() => {
    setLoading();

    try {
      await deleteHeroAPI(model.id);
      setSuccess(t('hero.deleteSnackbar', { name: model.name }));
      onClose(true);
    } catch (error) {
      setError(error);
    }
  };

  // Handle the cancel operation
  const handleCancelClick = () => onClose(false);

  return (
    <Dialog
      onClose={handleCancelClick}
      open={open}
    >
      <DialogTitle>
        {t('hero.deleteDialogTitle')}
      </DialogTitle>

      <DialogContent>
        <DialogContentText>
          {t('hero.deleteDialogText')}
        </DialogContentText>
      </DialogContent>

      {isLoading
        ? <AppLoader block />
        : (
          <DialogActions>
            <Button
              onClick={handleCancelClick}
              color="secondary"
            >
              {t('common.cancelButton')}
            </Button>

            <Button
              onClick={handleSubmitClick}
              color="error"
              autoFocus
            >
              {t('common.deleteButton')}
            </Button>
          </DialogActions>
        )
      }
    </Dialog>
  );
};
