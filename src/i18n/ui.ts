import en from "@i18n/translation/en.json";
import pl from "@i18n/translation/pl.json";

export const languages = {
  en: "English",
  pl: "Polski",
} as const;

export const dictionaries = {
  en,
  pl,
} as const;

export const defaultLang = "en";

export const ui = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.twitter": "Twitter",
    "portfolio.role": "Backend Engineer",
    "portfolio.city": "Warsaw, Poland",
    "portfolio.about": "About",
    rodo: "I agree to the processing of personal data provided in this document for realising the recruitment process pursuant to the Personal Data Protection Act of 10 May 2018 (Journal of Laws 2018, item 1000) and in agreement with Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation).",
  },
  pl: {
    "nav.home": "Strona Główna",
    "nav.about": "O mnie",
    "portfolio.city": "Warszawa, Polska",
    rodo: "Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji (zgodnie z ustawą z dnia 10 maja 2018 roku o ochronie danych osobowych (Dz. Ustaw z 2018, poz. 1000) oraz zgodnie z Rozporządzeniem Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (RODO).",
  },
} as const;

export type LanguageKey = keyof typeof ui;
export type TranslationKey = keyof (typeof ui)[typeof defaultLang];

function deepMerge<T extends Record<string, any>>(
  base: T,
  overrides: Partial<T>,
): T {
  const result: any = { ...base };
  for (const key in overrides) {
    if (
      typeof overrides[key] === "object" &&
      overrides[key] !== null &&
      !Array.isArray(overrides[key])
    ) {
      result[key] = deepMerge(base[key], overrides[key] as any);
    } else if (overrides[key] !== undefined) {
      result[key] = overrides[key];
    }
  }
  return result;
}

export function getTranslations(lang: string | undefined) {
  const safeLang =
    (lang as LanguageKey) in languages ? (lang as LanguageKey) : "en";
  const english = dictionaries.en;
  const local = dictionaries[safeLang];

  // Deep merge local over English → fallback for missing keys
  return deepMerge(english, local);
}
