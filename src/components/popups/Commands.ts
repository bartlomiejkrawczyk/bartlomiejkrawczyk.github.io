export const commandIds = [
  "print",
  "go-to-home",
  "go-back",
  "open-github",
  "open-instagram",
  "open-discord",
  "toggle-tag-filter",
  // "project-search",
  // "language",
  // "themes",
  // "tag-filter",
  // "tag-type-filter",
] as const;

export type CommandId = (typeof commandIds)[number];

export interface Command {
  id: CommandId;
  name: { en: string; pl: string };
  execute: () => void;
}

export const commands: Record<CommandId, Command> = {
  print: {
    id: "print",
    name: { en: "Print", pl: "Drukuj" },
    execute: () => {
      window.print();
    },
  },
  "go-to-home": {
    id: "go-to-home",
    name: { en: "Home", pl: "Strona Główna" },
    execute: () => {
      window.location.href = "/";
    },
  },
  "go-back": {
    id: "go-back",
    name: { en: "Back", pl: "Poprzednia Strona" },
    execute: () => {
      history.back();
    },
  },
  "open-github": {
    id: "open-github",
    name: { en: "GitHub", pl: "GitHub" },
    execute: () => {
      window.open("https://github.com/bartlomiejkrawczyk");
    },
  },
  "open-instagram": {
    id: "open-instagram",
    name: { en: "Instagram", pl: "Instagram" },
    execute: () => {
      window.open("https://www.instagram.com/bartlomiejkrawczyk_");
    },
  },
  "open-discord": {
    id: "open-discord",
    name: { en: "Discord", pl: "Discord" },
    execute: () => {
      window.open("https://discordapp.com/users/384450810547011584");
    },
  },
  "toggle-tag-filter": {
    id: "toggle-tag-filter",
    name: { en: "Toggle Tag Filter", pl: "Przełącz Tryb Filtrowania Tagów" },
    execute: () => {
      window?.toggleTagEditMode?.();
    },
  },
};
