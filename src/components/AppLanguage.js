import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { languageList } from 'i18n';

export default function AppLanguage() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  // Handle the selection of a new language
  const handleLanguageChange = (_, value) => {
    setLanguage(value);
    i18n.changeLanguage(value);
  };

  // Generate the language buttons
  const languageButtons = languageList.map(value => (
    <ToggleButton
      key={value}
      value={value}
      aria-label="centered"
    >
      {value}
    </ToggleButton>
  ));

  return (
    <ToggleButtonGroup
      color="primary"
      value={language}
      exclusive
      onChange={handleLanguageChange}
    >
      {languageButtons}
    </ToggleButtonGroup>
  );
}
