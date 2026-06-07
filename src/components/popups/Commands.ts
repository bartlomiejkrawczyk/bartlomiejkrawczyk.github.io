import type { Color } from "../navigation/Themes";

export const commandIds = [
  "print",
  "go-to-home",
  "go-to-projects",
  "go-back",
  "open-github",
  "open-instagram",
  "open-discord",
  "toggle-tag-filter",
  "toggle-project-filter",
  "theme",
  "color",
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
  "go-to-projects": {
    id: "go-to-projects",
    name: { en: "Projects", pl: "Projekty" },
    execute: () => {
      window.location.href = "/projects-page";
    },
  },
  "go-back": {
    id: "go-back",
    name: { en: "Back", pl: "Poprzednia Strona" },
    execute: () => {
      history.back();
    },
  },
  theme: {
    id: "theme",
    name: { en: "Toggle Theme", pl: "Przełącz Motyw" },
    execute: () => {
      const { color, mode } = window.getTheme?.() || {
        color: "purple",
        mode: "dark",
      };
      const newMode = mode === "light" ? "dark" : "light";
      window.setTheme?.(color, newMode);
    },
  },
  color: {
    id: "color",
    name: { en: "Toggle Color", pl: "Przełącz Kolor" },
    execute: () => {
      const { color, mode } = window.getTheme?.() || {
        color: "purple",
        mode: "dark",
      };
      let newColor: Color = color;
      switch (color) {
        case "purple":
          newColor = "blue";
          break;
        case "blue":
          newColor = "green";
          break;
        case "green":
          newColor = "pink";
          break;
        case "pink":
          newColor = "red";
          break;
        case "red":
          newColor = "teal";
          break;
        case "teal":
          newColor = "bw";
          break;
        case "bw":
          newColor = "purple";
          break;
      }
      window.setTheme?.(newColor, mode);
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
    name: { en: "Toggle Tag Filter", pl: "Filtrowanie Tagów" },
    execute: () => {
      window?.toggleTagEditMode?.();
    },
  },
  "toggle-project-filter": {
    id: "toggle-project-filter",
    name: {
      en: "Toggle Project Filter",
      pl: "Filtrowanie Projektów",
    },
    execute: () => {
      window?.toggleProjectEditMode?.();
    },
  },
};
