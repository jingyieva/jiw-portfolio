import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import common_zh from "@/constants/locales/zh/common.json";
import about_zh from "@/constants/locales/zh/about.json";
import common_en from "@/constants/locales/en/common.json";
import about_en from "@/constants/locales/en/about.json";
import projects_en from "@/constants/locales/en/projects.json";
import projects_zh from "@/constants/locales/zh/projects.json";

i18n
  .use(LanguageDetector)              // 會自動從 navigator / localStorage 偵測
  .use(initReactI18next)
  .init({
    resources: {
      zh: { common: common_zh, about: about_zh, projects: projects_zh },
      en: { common: common_en, about: about_en, projects: projects_en },
    },
    fallbackLng: "zh",
    lng: undefined,                   // 讓偵測器決定
    ns: ["common", "about", "projects"],
    defaultNS: "common",
    interpolation: { escapeValue: false },
    detection: { order: ["querystring","localStorage","navigator"], lookupQuerystring: "lang" },
  });

export default i18n;
