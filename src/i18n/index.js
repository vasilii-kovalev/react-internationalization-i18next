import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import {
  en,
  ru,
  // ... other locales
} from "./locales";

const resources = {
  en,
  ru,
  // ... other locales
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: {
      lookupQuerystring: "lng",
      order: ["querystring"],
    },

    fallbackLng: "en",
    interpolation: {
      // Not needed for React
      escapeValue: false,
    },
    resources,
  });

export default i18n;
