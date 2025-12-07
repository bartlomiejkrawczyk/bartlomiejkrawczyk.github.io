import type { LanguageKey } from "@i18n/ui";
import type { Color, Mode } from "@components/navigation/Themes";
import type { TagId } from "./components/content/Tags";

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

declare global {
  interface Window {
    setTheme?: (
      color: Color,
      mode: Mode,
      refresh: Boolean = false,
      updateStorage: Boolean = true,
    ) => void;
    resetTheme?: () => void;
    toggleTagEditMode?: () => void;
    setTagVisibility?: (id: TagId, visible: Boolean) => void;
    toggleProjectEditMode?: () => void;
    setProjectVisibility?: (id: string, visible: Boolean) => void;
  }
}
