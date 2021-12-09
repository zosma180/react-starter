import Box from '@mui/material/Box';
import { getHeroListAPI } from 'api/HeroAPI';
import AppError from 'components/AppError';
import AppLoader from 'components/AppLoader';
import AppPlaceholder from 'components/AppPlaceholder';
import useAsyncState from 'components/AsyncState';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import HeroCard from './HeroCard';
import HeroCreateButton from './HeroCreateButton';

export default function HeroPage() {
  const [heroList, setHeroList] = useState([]);
  const { isLoading, isError, setLoading, setSuccess, setError } = useAsyncState();
  const { t } = useTranslation();

  // Define the loading call of the list
  const loadList = useCallback(async() => {
    setLoading();

    try {
      const result = await getHeroListAPI();
      setHeroList(result);
      setSuccess(t('hero.loadSnackbar'));
    } catch (error) {
      setError(error);
    }
  }, [t, setLoading, setSuccess, setError]);

  // Load the list at the first render
  useEffect(() => loadList(), [loadList]);

  // Handle the reload request by the children
  const handleReloadRequest = () => loadList();

  // Check which tyoe of content should be displayed
  let content = <AppPlaceholder />;

  if (isLoading) {
    content = (
      <AppLoader
        block
        size="big"
      />
    );
  } else if (isError) {
    content = <AppError />;
  } else if (heroList.length) {
    const renderList = heroList.map(item => (
      <HeroCard
        sx={styles.card}
        model={item}
        key={item.id}
        onReload={handleReloadRequest}
      />
    ));

    content = <Box sx={styles.cardContainer}>{renderList}</Box>;
  }

  return (
    <>
      <h1>{t('hero.title')}</h1>

      <HeroCreateButton onReload={handleReloadRequest} />

      {content}
    </>
  );
}

const styles = {
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginTop: '30px',
  },

  card: {
    marginBottom: '30px',
    width: {
      xs: '90%',
      md: '45%',
      lg: '30%',
      xl: '23%',
    },
  },
};
