import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { i18nConfig } from '@/i18nConfig';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // Your English translations
        }
      },
      ar: {
        translation: {
          // Your Arabic translations
        }
      }
    },
    lng: i18nConfig.defaultLocale,
    fallbackLng: i18nConfig.defaultLocale,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
