import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import it from './it.json';

const resources = {
  en: { translation: en },
  it: { translation: it },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
