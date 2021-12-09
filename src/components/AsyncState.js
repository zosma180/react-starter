import { useSnackbar } from 'notistack';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

const LOADING_STATE = Object.freeze({
  PROGRESS: 'PROGRESS',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
});

export default function useAsyncState() {
  const [loadingState, setLoadingState] = useState();
  const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();

  const isLoading = loadingState === LOADING_STATE.PROGRESS;
  const isSuccess = loadingState === LOADING_STATE.SUCCESS;
  const isError = loadingState === LOADING_STATE.ERROR;

  const setLoading = useCallback(
    () => setLoadingState(LOADING_STATE.PROGRESS),
    [setLoadingState],
  );

  const setSuccess = useCallback(
    (message = t('common.successSnackbar')) => {
      setLoadingState(LOADING_STATE.SUCCESS);
      enqueueSnackbar(message, { variant: 'success' });
    },
    [setLoadingState, enqueueSnackbar, t],
  );

  const setError = useCallback(
    (error) => {
      setLoadingState(LOADING_STATE.ERROR);
      enqueueSnackbar(`${t('common.errorSnackbar')} ${error.message}`, { variant: 'error' });
    },
    [setLoadingState, enqueueSnackbar, t],
  );

  return {
    isLoading,
    isSuccess,
    isError,
    setLoading,
    setSuccess,
    setError,
  };
}
