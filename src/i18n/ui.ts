export const languages = {
  en: "English",
  pl: "Polski",
};

export const defaultLang = "en";

export const ui = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.twitter": "Twitter",
  },
  pl: {
    "nav.home": "Strona Główna",
    "nav.about": "O mnie",
  },
} as const;

export type LanguageKey = keyof typeof ui;
export type TranslationKey = keyof (typeof ui)[typeof defaultLang];
