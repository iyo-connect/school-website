import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslation from '../locales/en/translation.json';
import hiTranslation from '../locales/hi/translation.json';
import taTranslation from '../locales/ta/translation.json';
import urTranslation from '../locales/ur/translation.json';
import mlTranslation from '../locales/ml/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    returnObjects: true,
    resources: {
      en: { translation: enTranslation },
      hi: { translation: hiTranslation },
      ta: { translation: taTranslation },
      ur: { translation: urTranslation },
      ml: { translation: mlTranslation },
    },
  });

export default i18n;