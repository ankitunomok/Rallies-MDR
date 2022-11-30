import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  lng: 'en',
  resources: {
    en: {
      translations: require('./locales/en/translations.json')
    },
    gu: {
      translations: require('./locales/gu/translations.json')
    },
    hi: {
      translations: require('./locales/hi/translations.json')
    },
    mr: {
      translations: require('./locales/mr/translations.json')
    }
  },
  ns: ['translations'],
  defaultNS: 'translations'
});

i18n.languages = ['en', 'gu', 'mr', 'hi'];

export default i18n;