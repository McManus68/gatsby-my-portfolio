import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import translationEn from '../../assets/locales/en.json'
import translationFr from '../../assets/locales/fr.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: translationEn,
      },
      fr: {
        translation: translationFr,
      },
    },
    debug: false,

    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    react: {
      wait: true,
    },
  })

export default i18n
