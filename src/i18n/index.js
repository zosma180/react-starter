import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import it from './it.json';

const resources = {
  en: { translation: en },
  it: { translation: it },
};

export const languageList = Object.keys(resources);

const detection = {
  order: ['cookie', 'navigator'],
  caches: ['cookie'],
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    detection,
    resources,
    fallbackLng: 'en',
    supportedLngs: languageList,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
