import { useTranslation } from 'react-i18next';

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <div className="about-page">
      <h1>{t('about.title')}</h1>

      <p>{t('about.text')}</p>
    </div>
  );
}
