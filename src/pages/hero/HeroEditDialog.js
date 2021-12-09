import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import { addHeroAPI, updateHeroAPI } from 'api/HeroAPI';
import AppLoader from 'components/AppLoader';
import useAsyncState from 'components/AsyncState';
import cloneDeep from 'lodash.clonedeep';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HeroModel } from './HeroModel';

export default function HeroEditDialog(props) {
  const { model, open, onClose } = props;
  const startingModel = model ? cloneDeep(model) : new HeroModel();
  const [editingModel, setEditingModel] = useState(startingModel);
  const { isLoading, setLoading, setSuccess, setError } = useAsyncState();
  const { t } = useTranslation();

  // Handle the editing model update
  const setModelProperty = (property, value) => {
    setEditingModel(oldValue => ({ ...oldValue, [property]: value }));
  };

  // Define the api call
  const handleSaveClick = async() => {
    setLoading();

    try {
      if (editingModel.id < 0) {
        await addHeroAPI({ ...editingModel, id: undefined });
        setEditingModel(new HeroModel());
      } else {
        await updateHeroAPI(editingModel);
      }

      setSuccess(t('hero.editSnackbar', { name: editingModel.name }));
      onClose(true);
    } catch (error) {
      setError(error);
    }
  };

  // Check if the form is valid
  const isFormValid = editingModel.name && editingModel.group && editingModel.image;

  // Handle the cancel operation
  const handleCancelClick = () => {
    setEditingModel(new HeroModel());
    onClose(false);
  };

  return (
    <Dialog
      onClose={handleCancelClick}
      open={open}
    >
      <DialogTitle>
        {t('hero.editDialogTitle')}
      </DialogTitle>

      <Box sx={styles.body}>
        <TextField
          sx={styles.field}
          label={t('hero.editDialogName')}
          variant="standard"
          fullWidth
          error={!editingModel.name}
          value={editingModel.name}
          onChange={ev => setModelProperty('name', ev.target.value)}
        />

        <TextField
          sx={styles.field}
          label={t('hero.editDialogGroup')}
          variant="standard"
          fullWidth
          error={!editingModel.group}
          value={editingModel.group}
          onChange={ev => setModelProperty('group', ev.target.value)}
        />

        <TextField
          sx={styles.field}
          label={t('hero.editDialogImage')}
          variant="standard"
          fullWidth
          error={!editingModel.image}
          value={editingModel.image}
          onChange={ev => setModelProperty('image', ev.target.value)}
        />

        <TextField
          sx={styles.field}
          label={t('hero.editDialogDescription')}
          variant="standard"
          multiline
          maxRows={6}
          fullWidth
          inputProps={{ maxLength: 400 }}
          value={editingModel.description}
          onChange={ev => setModelProperty('description', ev.target.value)}
        />

        {isLoading
          ? <AppLoader block />
          : (
            <Box sx={styles.actions}>
              <Button
                onClick={handleCancelClick}
                color="secondary"
              >
                {t('common.cancelButton')}
              </Button>

              <Button
                disabled={!isFormValid}
                onClick={handleSaveClick}
              >
                {t('common.saveButton')}
              </Button>
            </Box>
          )
        }
      </Box>
    </Dialog>
  );
};

const styles = {
  body: {
    boxSizing: 'border-box',
    padding: '0 15px 15px 15px',
    width: '400px',

    field: {
      marginBottom: '20px',
    },

    actions: {
      display: 'flex',
      justifyContent: 'flex-end',
      paddingTop: '20px',
      width: '100%',
    },
  },
};
