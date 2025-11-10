import type { LanguageKey } from "@i18n/ui";

interface ImportMetaEnv {
  readonly URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface Window {}

declare namespace astroHTML.JSX {
  interface HTMLAttributes {}

  interface CSSProperties {}
}

declare function setLanguage(key: LanguageKey);
