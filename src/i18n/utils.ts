import {
  ui,
  defaultLang,
  languages,
  type LanguageKey,
  type TranslationKey,
} from "./ui";

export function getLangFromUrl(url: URL) {
  let langParts = url.pathname.split("/");
  let [, lang] = langParts;

  console.log(lang);
  console.log(langParts);

  if (lang === undefined) return defaultLang;

  if (!(lang in languages)) {
    lang = defaultLang;
  }

  if (lang in ui) return lang as LanguageKey;

  return defaultLang;
}

export function useTranslations(lang: LanguageKey) {
  return function t(key: TranslationKey) {
    const fallback = ui[defaultLang][key];

    const currentLocale = ui[lang] as Record<
      TranslationKey,
      string | undefined
    >;

    const translation = currentLocale[key];

    return translation ?? fallback;
  };
}
